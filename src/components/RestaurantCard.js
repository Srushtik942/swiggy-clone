import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const RestaurantCard=(props)=>{
    const{resData}= props;

    const {loggedUser}= useContext(UserContext);


    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo,deliveryTime} = resData?.info;
    // const {name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
      return(
        <div className ="m-4 p-5 w-[250px] h-[450px] bg-gray-100 rounded-lg hover:bg-gray-200 overflow-hidden shadow-slate-50" >
          <img className=" rounded-lg  h-64" alt ="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
  cloudinaryImageId

          }
          />
              <b className="py-3 text-lg">{name}</b>
              <h4 className="font-semibold">{cuisines.join(",")}</h4>
              <h4 className="  bg-green-500 w-12 font-semibold rounded-sm ">⭐{avgRatingString}</h4>
              <h4>{costForTwo}</h4>
              <h4 className="font-semibold">{resData.info.sla.deliveryTime} minutes</h4>

        </div>
      );
    };

    export default RestaurantCard;