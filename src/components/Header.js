
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import { FaHome, FaUser,FaSms } from 'react-icons/fa'

const Header = ()=>{
  // const btnName = "login";

  const[btnNAmeReact , setbtnNAmereact] = useState("Login");

//   useEffect(()=>{
// console.log("Useeffect called!");
//   })

const {loggedUser}= useContext(UserContext);
// console.log(loggedUser);



//subscribing to the store using
const cartItems = useSelector((store)=> store.cart.items);
console.log(cartItems);


const onlineStatus = useOnlineStatus();

    return(
      <div className="flex  justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-orange-500-50">
        <div className="w-24 my-3">
          <img  src= "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"/>

        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4	">
          <li className="px-4" ></li>
            <li className="px-4 hover:text-orange-400 ">Online Status: {onlineStatus ? "🟢" : "🛑"}</li>
            <li className="px-4" >

              <Link to="/" class="new font-semibold hover:text-orange-400">Home</Link></li>
            <li className="px-4">
              <Link to ="/About" class="new font-semibold hover:text-orange-400">About Us</Link></li>
            <li className="px-4">
              <Link to = "/Contact" class="new font-semibold hover:text-orange-400">Contact Us</Link></li>

              <li className="px-4">
              <Link to = "/Grocery" class="new font-semibold hover:text-orange-400">Instamart</Link></li>

            <li className="px-4 font-semibold hover:text-orange-400">
               <Link to = "/Cart"> Cart-({cartItems?.length} items)</Link>
             </li>

{/*
            <button
            className="login"
             onClick={ () => {
             btnNAmeReact ==="Login"
             ? setbtnNAmereact ("Logout")
             :setbtnNAmereact("Login");
             ;
              console.log("bye Bye!");

            }}
            >{btnNAmeReact}
            </button> */}
            <li className="px-4 font-bold hover:text-orange-400">{loggedUser}</li>

          </ul>
        </div>
      </div>
    )
  };

  export default Header;
