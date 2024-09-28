import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus.js";
import Head  from "./Head";




//normal variable
// let resData=[];
const Body = ()=>{

  //local state variable
  const[listofRestaurant,setListOfRestaurant] = useState([]);
  const[filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [CarouselList,setCarouselList] = useState([]);

  const [searchText, setsearchText] = useState("");



useEffect(()=>{

  fetchData();
},[]);

//fetching data
const fetchData = async ()=>{
  // const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const data = await  fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   console.log(data);


  const json = await data.json();

  // const json = resData

  console.log(json, listofRestaurant);

  //optional chaining
  const restaurants = (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setListOfRestaurant(restaurants);
  setfilteredRestaurant(restaurants);
  console.log(listofRestaurant);
  console.log(filteredRestaurant);

  const CarouselList= (json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  setCarouselList(CarouselList);
  console.log(CarouselList);

};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>Looks like you're offline,Please check your internet connection! </h1>




const search = () =>{
  const filter = listofRestaurant.filter((res)=>
  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
  setfilteredRestaurant(filter);
};

const TopRated = () =>{
  const filter = listofRestaurant.filter((res)=> res.info.avgRating > 4);
  setfilteredRestaurant(filter);
};





    return listofRestaurant?.length === 0 ? (
    <Shimmer/>

  ) : (


     <div className="body  mx-26 ">
      <div className="flex flex-wrap p-4 mx-2 justify-center ">
        <div className="mx-2">
        <h1 className="font-bold text-2xl mb-0 text-slate-800 ">
        Hey Foodie! Whats, on your mind?
        </h1>
        <div className="carousel-container ">
          <div className="carousel  flex w-full ">
            {CarouselList?.map((item)=>(
              <Head key ={item.id} cardData = {item}/>
            ))}
          </div>
          </div>
        </div>
      </div>

      <hr className="shadow-lg"></hr>

       <div className="filter flex mx-6">
       <div className="search m-2 p-4 ">
       <input type ="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{

        setsearchText(e.target.value);

       }}/>





      {/* Search function called */}
        <button className="font-semibold px-2 py-2 ml-4 bg-green-100 m-3 rounded-lg"
        onClick= {search}>Search</button>
        </div>

       {/* Top Rated restaurant function called */}
       <div className="px-4 py-2 flex items-center mx-18 ">

       <button className="font-semibold px-4 py-2 bg-red-100 rounded-lg mx-18 " onClick={TopRated}>Top-Picks For you!</button>
       </div>

         </div>

       <div className="flex flex-wrap ">
        {/* map */}
        {/* Link is used for clickable restaurant card  */}
       {filteredRestaurant?.map((restaurant)=>(
         <Link key = {restaurant?.info?.id} to ={"/restaurants/" + restaurant.info.id} class="n1"><RestaurantCard resData={restaurant}/></Link>
       ))}

       </div>
{/*
       <div >
        {list.map((rMenu)=>(
        <Link key ={rMenu.id} to={"/resMenu/"+ rMenu.id }><Head rData={rMenu}/></Link>
        ))}
      </div> */}
     </div>


    );
 };
export default Body;
