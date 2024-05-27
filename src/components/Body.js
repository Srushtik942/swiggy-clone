import RestaurantCard from "./RestaurantCard";
import resData from "../../utils/mock";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


// const resObj =[{
//     "info": {
//       "id": "4087",
//       "name": "Aroma's Hyderabad House",
//       "cloudinaryImageId": "syu9rjepkqsw5agjbbd9",
//       "locality": "Erandwane",
//       "areaName": "Erandwane",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//       "Biryani",
//       "Mughlai",
//       "North Indian",
//       "Chinese"
//       ],
//       "avgRating": 4.3,
//       "parentId": "71",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "10K+",
//       "promoted": true,
//       "adTrackingId": "cid=13150827~p=0~adgrpid=13150827#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4087~eid=7708933b-9869-44ce-aaaf-71747d8a8549~srvts=1715671612318~collid=45995",
//       "sla": {
//       "deliveryTime": 28,
//       "lastMileTravel": 3.5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "25-30 mins",
//       "lastMileTravelString": "3.5 km",
//       "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//       "nextCloseTime": "2024-05-14 16:30:00",
//       "opened": true
//       },
//       "badges": {
//       "imageBadges": [
//       {
//       "imageId": "Rxawards/_CATEGORY-Biryani.png",
//       "description": "Delivery!"
//       }
//       ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//       "entityBadges": {
//       "textBased": {},
//       "imageBased": {
//       "badgeObject": [
//       {
//       "attributes": {
//       "imageId": "Rxawards/_CATEGORY-Biryani.png",
//       "description": "Delivery!"
//       }
//       }
//       ]
//       },
//       "textExtendedBadges": {}
//       }
//       },
//       "aggregatedDiscountInfoV3": {
//       "header": "40% OFF",
//       "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {},
//       "video": {}
//       }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//       "aggregatedRating": {
//       "rating": "4.0",
//       "ratingCount": "500+"
//       },
//       "source": "GOOGLE",
//       "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {},
//       "cta": {
//       "link": "swiggy://menu?restaurant_id=4087",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//       }
//       },
//       {
//         "info": {
//         "id": "506982",
//         "name": "McDonald's",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fcc0c1ea-aef9-4c8d-8b43-568a3b2e0808_506982.jpg",
//         "locality": "Narayan Peth",
//         "areaName": "Shaniwar Peth",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//         ],
//         "avgRating": 4.5,
//         "parentId": "630",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1K+",
//         "sla": {
//         "deliveryTime": 29,
//         "lastMileTravel": 1.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "1.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//         "nextCloseTime": "2024-05-14 23:45:00",
//         "opened": true
//         },
//         "badges": {
//         "imageBadges": [
//         {
//         "imageId": "Rxawards/_CATEGORY-Burger.png",
//         "description": "Delivery!"
//         }
//         ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {},
//         "type": "F",
//         "badgesV2": {
//         "entityBadges": {
//         "textBased": {},
//         "imageBased": {
//         "badgeObject": [
//         {
//         "attributes": {
//         "imageId": "Rxawards/_CATEGORY-Burger.png",
//         "description": "Delivery!"
//         }
//         }
//         ]
//         },
//         "textExtendedBadges": {}
//         }
//         },
//         "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {},
//         "video": {}
//         }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {},
//         "externalRatings": {
//         "aggregatedRating": {
//         "rating": "--"
//         }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//         },
//         "analytics": {},
//         "cta": {
//         "link": "swiggy://menu?restaurant_id=506982",
//         "text": "RESTAURANT_MENU",
//         "type": "DEEPLINK"
//         }
//         },
//         {
//           "info": {
//           "id": "243625",
//           "name": "KFC",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243625.JPG",
//           "locality": "Deccan Gymkhana",
//           "areaName": "Deccan Gymkhana",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//           "Burgers",
//           "Rolls & Wraps",
//           "Fast Food"
//           ],
//           "avgRating": 4.2,
//           "parentId": "547",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "1K+",
//           "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 2.2,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "2.2 km",
//           "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//           "nextCloseTime": "2024-05-15 00:00:00",
//           "opened": true
//           },
//           "badges": {
//           "imageBadges": [
//           {
//           "imageId": "Rxawards/_CATEGORY-Burger.png",
//           "description": "Delivery!"
//           }
//           ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//           "entityBadges": {
//           "textBased": {},
//           "imageBased": {
//           "badgeObject": [
//           {
//           "attributes": {
//           "imageId": "Rxawards/_CATEGORY-Burger.png",
//           "description": "Delivery!"
//           }
//           }
//           ]
//           },
//           "textExtendedBadges": {}
//           }
//           },
//           "aggregatedDiscountInfoV3": {
//           "header": "20% OFF",
//           "subHeader": "UPTO ₹50"
//           },
//           "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//           }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {},
//           "externalRatings": {
//           "aggregatedRating": {
//           "rating": "4.0",
//           "ratingCount": "1K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//           },
//           "analytics": {},
//           "cta": {
//           "link": "swiggy://menu?restaurant_id=243625",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//           }
//           },

//           {
//             "info": {
//             "id": "456986",
//             "name": "Domino's Pizza",
//             "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//             "locality": "Somwar Peth",
//             "areaName": "Rasta Peth",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//             ],
//             "avgRating": 4,
//             "parentId": "2456",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "500+",
//             "sla": {
//             "deliveryTime": 25,
//             "lastMileTravel": 1.4,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25 mins",
//             "lastMileTravelString": "1.4 km",
//             "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//             "nextCloseTime": "2024-05-14 23:55:00",
//             "opened": true
//             },
//             "badges": {
//             "imageBadges": [
//             {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//             }
//             ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//             "entityBadges": {
//             "textBased": {},
//             "imageBased": {
//             "badgeObject": [
//             {
//             "attributes": {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//             }
//             }
//             ]
//             },
//             "textExtendedBadges": {}
//             }
//             },
//             "aggregatedDiscountInfoV3": {
//             "header": "₹150 OFF",
//             "subHeader": "ABOVE ₹299",
//             "discountTag": "FLAT DEAL"
//             },
//             "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {},
//             "video": {}
//             }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {},
//             "externalRatings": {
//             "aggregatedRating": {
//             "rating": "--"
//             }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//             },
//             "analytics": {},
//             "cta": {
//             "link": "swiggy://menu?restaurant_id=456986",
//             "text": "RESTAURANT_MENU",
//             "type": "DEEPLINK"
//             }
//             },
//             {
//               "info": {
//               "id": "17024",
//               "name": "Shahi Dawat (Gulzar-E-Mohammadi)",
//               "cloudinaryImageId": "bjputfyr0fnmvk8ntypp",
//               "locality": "Camp",
//               "areaName": "Camp",
//               "costForTwo": "₹400 for two",
//               "cuisines": [
//               "Mughlai",
//               "North Indian",
//               "Chinese",
//               "Arabian",
//               "Desserts"
//               ],
//               "avgRating": 4.4,
//               "parentId": "453341",
//               "avgRatingString": "4.4",
//               "totalRatingsString": "10K+",
//               "promoted": true,
//               "adTrackingId": "cid=13109955~p=1~adgrpid=13109955#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=17024~eid=aa0206ae-ca57-4a95-845f-da998468505b~srvts=1715671612318~collid=45995",
//               "sla": {
//               "deliveryTime": 28,
//               "lastMileTravel": 3,
//               "serviceability": "SERVICEABLE",
//               "slaString": "25-30 mins",
//               "lastMileTravelString": "3.0 km",
//               "iconType": "ICON_TYPE_EMPTY"
//               },
//               "availability": {
//               "nextCloseTime": "2024-05-14 23:15:00",
//               "opened": true
//               },
//               "badges": {},
//               "isOpen": true,
//               "type": "F",
//               "badgesV2": {
//               "entityBadges": {
//               "imageBased": {},
//               "textExtendedBadges": {},
//               "textBased": {}
//               }
//               },
//               "aggregatedDiscountInfoV3": {
//               "header": "20% OFF",
//               "subHeader": "UPTO ₹50"
//               },
//               "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {},
//               "video": {}
//               }
//               },
//               "reviewsSummary": {},
//               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//               "restaurantOfferPresentationInfo": {},
//               "externalRatings": {
//               "aggregatedRating": {
//               "rating": "4.3",
//               "ratingCount": "1K+"
//               },
//               "source": "GOOGLE",
//               "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//               },
//               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//               },
//               "analytics": {},
//               "cta": {
//               "link": "swiggy://menu?restaurant_id=17024",
//               "text": "RESTAURANT_MENU",
//               "type": "DEEPLINK"
//               }
//               },
//               {
//                 "info": {
//                 "id": "7855",
//                 "name": "Supriya Restaurant",
//                 "cloudinaryImageId": "ltjsyvudeyfnzmxttpxf",
//                 "locality": "Camp",
//                 "areaName": "Camp Area",
//                 "costForTwo": "₹300 for two",
//                 "cuisines": [
//                 "North Indian",
//                 "Chinese",
//                 "South Indian",
//                 "Fast Food",
//                 "Beverages",
//                 "Snacks"
//                 ],
//                 "avgRating": 4.6,
//                 "parentId": "197633",
//                 "avgRatingString": "4.6",
//                 "totalRatingsString": "10K+",
//                 "sla": {
//                 "deliveryTime": 29,
//                 "lastMileTravel": 2.3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "2.3 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                 "nextCloseTime": "2024-05-14 23:00:00",
//                 "opened": true
//                 },
//                 "badges": {},
//                 "isOpen": true,
//                 "aggregatedDiscountInfoV2": {},
//                 "type": "F",
//                 "badgesV2": {
//                 "entityBadges": {
//                 "imageBased": {},
//                 "textExtendedBadges": {},
//                 "textBased": {}
//                 }
//                 },
//                 "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {},
//                 "video": {}
//                 }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {},
//                 "externalRatings": {
//                 "aggregatedRating": {
//                 "rating": "4.1",
//                 "ratingCount": "5K+"
//                 },
//                 "source": "GOOGLE",
//                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                 },
//                 "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "swiggy://menu?restaurant_id=7855",
//                 "text": "RESTAURANT_MENU",
//                 "type": "DEEPLINK"
//                 }
//                 },

//     ]

// const[filetedrestau, setfilterrestaurt]
const Body = ()=>{

useEffect(()=>{
  fetchData();
},[]);

//cafe
const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/mapi/misc_new/skeleton?lat=18.5204303&lng=73.8567437");


  const json = await data.json();

  console.log(json);
};


//conditional rendering


if(RestaurantCard.length ===0 )
  {
    return <Shimmer></Shimmer>;
  }
console.log("Body rendered");

    return (
     <div className="body">
       <div className="filter">
       <div className="seacrh">
       <input type ="text" className="search-box"/>
      <button>Search</button>
       </div>
        <button className="Filterb" onClick={()=>
        {
          console.log("Button Clicked!");
        }}

        >Top Rated Restaurants</button>
       </div>
       <div className="res-container">
       {/* <RestaurantCard resData={resObj[0]}
       /> */}
       {/* <RestaurantCard resData={resObj[1]}/>
       <RestaurantCard resData={resObj[2]}/>
       <RestaurantCard resData={resObj[3]}/>
       <RestaurantCard resData={resObj[4]}/>
       <RestaurantCard resData={resObj[5]}/>
       <RestaurantCard resData={resObj[6]}/>
       <RestaurantCard resData={resObj[7]}/>
       <RestaurantCard resData={resObj[8]}/>
       <RestaurantCard resData={resObj[9]}/>
       <RestaurantCard resData={resObj[10]}/> */}
       {resData.map((restaurant)=>(
         <RestaurantCard key = {restaurant.info.id}resData={restaurant}/>
       ))}

       </div>
     </div>
    );
 };
export default Body;
