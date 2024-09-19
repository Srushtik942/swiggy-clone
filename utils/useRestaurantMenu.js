import { useEffect, useState } from "react";

import { Menu_API } from "../../utils/constants";

const useRestaurantMenu = (resId)=>{
    //fetchdata

    const [resInfo] = (resId)=>{

        const [resId,setResInfo] = useState(null);
    }
    useEffect(()=>{
        fetchData();

    },[]);

     const fetchData = async ()=>{
        const data = await  fetch(Menu_API + resId);
        const json = await data.json();
        setResInfo(json);
     };


        return resInfo;
}
export default useRestaurantMenu;