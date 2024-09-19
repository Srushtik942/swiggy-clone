import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../../utils/constants";

import RestaurantCategory from "./RestaurantCategory";
const Restaurantmenu = ()=>{

    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    const [showIndex, setShowIndex] = useState(null);




    //creating custom hook
    // const resInfo  = useRestaurantMenu(resId);

useEffect(()=>{
    fetchMenu();

},[]);

const fetchMenu = async () => {
    const data = await fetch(
     Menu_API
      +
      resId

    );

    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };
  const {
   name,
    cuisines,
    costForTwoMessage
  } = resInfo?.cards?.[2]?.card?.card?.info || {};


  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.categories?.[0]?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards || [];



// console.log(resInfo);
// console.log(name,cuisines,costForTwoMessage);



const category =
resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c)=>
    c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

console.log(category);


return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center ">
       <h1 className="font-bold my-6 text-2xl">{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
    <div className="menu">
      <p className="font-bold text-lg">{resInfo?.cards?.[2]?.card?.card?.info?.cuisines.join(" ,") } - {resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage} </p>

    {/* categories accordian */}
    {category.map((Cat,index)=>(
//controlled component

      <RestaurantCategory key = {Cat?.card?.card.title} data ={Cat?.card?.card}

      showItems = {index === showIndex ? true :false}

      setShowIndex={()=>setShowIndex(index)}


      />
      ))}
    </div>
    </div>
  );
};

export default Restaurantmenu;

