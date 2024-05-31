import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";



//normal variable
// let resData=[];
const Body = ()=>{

  //local state variable
  const[listofRestaurant,setListOfRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

useEffect(()=>{
  fetchData();
},[]);

//fetching data
const fetchData = async ()=>{
  const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


  const json = await data.json();

  console.log(json);

  //optional chaining
  setListOfRestaurant(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants);
  console.log(setListOfRestaurant)
};

const filteredrestaurant = ()=>{
  if(topRated==false){
    const filteredlist = listofRestaurant.filter(res=>res.info.avgRating > 4);
    // console.log(filteredlist);
    setListOfRestaurant(filteredlist);


  }
}

//conditional rendering
// if(listofRestaurant.length === 0 )
//   {
//     return <Shimmer></Shimmer>;

//   }
// console.log("Body rendered");

    return listofRestaurant.length === 0 ? <Shimmer></Shimmer>:(
     <div className="body">
       <div className="filter">
       <div className="seacrh">
       <input type ="text" className="search-box" value={searchText} onChange={(e)=>{

        setsearchText(e.target.value);

       }}/>
      <button onClick={()=>{
        console.log(searchText);

        const filteredrestaurant = listofRestaurant.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setListOfRestaurant(filteredrestaurant);
      }}
      >Search</button>
       </div>
        <button className="Filterb" onClick={()=>
        {

          // filter logic here
          // const filteredlist = listofRestaurant.filter(
          //   (res)=> res.Data.avgRating > 4.5
          // );
          // setListOfRestaurant(filteredlist);
          // console.log("Button clicked")
          const filteredlist = listofRestaurant.filter(restaurants=>restaurants.info.avgRating > 4);
          setListOfRestaurant(filteredlist);
          console.log(filteredlist);
        }}

        >Top Rated Restaurants</button>
       </div>
       <div className="res-container">
        {/* map */}
       {listofRestaurant.map((restaurant)=>(
         <RestaurantCard key = {restaurant.info.id}resData={restaurant}/>
       ))}

       </div>
     </div>
    );
 };
export default Body;
