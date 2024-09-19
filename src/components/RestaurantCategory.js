import { useState } from "react";
import Itemlist from "./itemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) =>{

     const handleClick = () =>{
    setShowIndex();
     };
    return (
    <div>
        {/* header */}
        <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg"> {data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            </div>

           {showItems && <Itemlist items ={data.itemCards} />}

        </div>

        {/* accordian body */}



    </div>
    );
};
export default RestaurantCategory;