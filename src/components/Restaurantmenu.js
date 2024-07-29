import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../../utils/constants";
const Restaurantmenu = ()=>{

    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

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

  // const itemCards =
  //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards ||[];
  //    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards[3]?.card?.info [2] ;

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.categories?.[0]?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards || [];



console.log(resInfo);
console.log(name,cuisines,costForTwoMessage);

// if(resInfo===null) return <Shimmer/>;
return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
       <h1>{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
    <div className="menu">
      <p>{resInfo?.cards?.[2]?.card?.card?.info?.cuisines.join(" ,") } - {resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage} </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>{item?.card?.info?.name} - {" Rs. "}
          {item?.card?.info?.price/100}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Restaurantmenu;

