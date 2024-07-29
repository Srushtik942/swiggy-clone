import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";



//normal variable
// let resData=[];

const Body = ()=>{

  //local state variable
  const[listofRestaurant,setListOfRestaurant] = useState([]);
  const[filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");



useEffect(()=>{
  console.log("Error!")
  fetchData();
},[]);

//fetching data
const fetchData = async ()=>{
  // const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const data = await  fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //  console.log(data);


  const json = await data.json();

  console.log(json);

  //optional chaining
  const restaurants = (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // const restaurants = (json?.data?.success?.cards[4]?.gridWidget?.gridElements.infoWithStyle.restaurants);
  setListOfRestaurant(restaurants);
  setfilteredRestaurant(restaurants);
  console.log(setListOfRestaurant);
  console.log(setfilteredRestaurant);


};

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
       <div className="filter">
       <div className="search">
       <input type ="text" className="search-box" value={searchText} onChange={(e)=>{

        setsearchText(e.target.value);

       }}/>
      {/* Search function called */}
        <button onClick= {search}>Search</button>
        </div>
       {/* Top Rated restaurant function called */}
         <button className="Filterb" onClick={TopRated}>Top-Picks For you!</button>
         </div>
       <div className="res-container">
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
