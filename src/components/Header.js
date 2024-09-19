
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = ()=>{
  // const btnName = "login";

  const[btnNAmeReact , setbtnNAmereact] = useState("Login");

//   useEffect(()=>{
// console.log("Useeffect called!");
//   })

const {loggedUser}= useContext(UserContext);
console.log(loggedUser);


const onlineStatus = useOnlineStatus();

    return(
      <div className="flex  justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
        <div className="w-24">
          <img  src= "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"/>
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4	">
            <li className="px-4 ">Online Status: {onlineStatus ? "✅" : "🛑"}</li>
            <li className="px-4" >

              <Link to="/" class="new">Home</Link></li>
            <li className="px-4">
              <Link to ="/About" class="new">About Us</Link></li>
            <li className="px-4">
              <Link to = "/Contact" class="new">Contact Us</Link></li>

              <li className="px-4">
              <Link to = "/Grocery" class="new">Instamart</Link></li>

            <li className="px-4">Cart</li>


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
            </button>
            <li className="px-4 font-bold">{loggedUser}</li>

          </ul>
        </div>
      </div>
    )
  };

  export default Header;
