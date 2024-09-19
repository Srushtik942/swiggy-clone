import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus.js";



//normal variable
// let resData=[];
const Body = ()=>{

  //local state variable
  const[listofRestaurant,setListOfRestaurant] = useState([]);
  const[filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");



useEffect(()=>{

  fetchData();
},[]);

//fetching data
const fetchData = async ()=>{
  // const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const data = await  fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //  console.log(data);


  const json = await data.json();

  console.log(json, listofRestaurant);

  //optional chaining
  const restaurants = (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setListOfRestaurant(restaurants);
  setfilteredRestaurant(restaurants);
  console.log(setListOfRestaurant);
  console.log(setfilteredRestaurant);


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



    return listofRestaurant.length === 0 ? (
    <Shimmer/>
  ) : (
     <div className="body">
       <div className="filter flex mx-28">
       <div className="search m-2 p-4 ">
       <input type ="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{

        setsearchText(e.target.value);

       }}/>



      {/* Search function called */}
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick= {search}>Search</button>
        </div>

       {/* Top Rated restaurant function called */}
       <div className="px-4 py-2 flex items-center mx-18 ">

       <button className="px-4 py-2 bg-red-100 rounded-lg mx-20 " onClick={TopRated}>Top-Picks For you!</button>

       <h3 className="font-bold mx-34">Hey Foodie! Whats on your mind?🤭</h3>





       </div>

         </div>
       <div className="flex flex-wrap ">
        {/* map */}
        {/* Link is used for clickable restaurant card  */}
       {filteredRestaurant.map((restaurant)=>(
         <Link key = {restaurant.info.id} to ={"/restaurants/" + restaurant.info.id} class="n1"><RestaurantCard resData={restaurant}/></Link>
       ))}

       </div>
     </div>


    );
 };
export default Body;
