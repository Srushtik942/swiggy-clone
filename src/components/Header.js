
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
  // const btnName = "login";

  const[btnNAmeReact , setbtnNAmereact] = useState("Login");

//   useEffect(()=>{
// console.log("Useeffect called!");
//   })
    return(
      <div className="header">
        <div className="logo">
          <img  src= "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"/>
        </div>
        <div className="navitem">
          <ul>
            <li>

              <Link to="/" class="new">Home</Link></li>
            <li>
              <Link to ="/About" class="new">About Us</Link></li>
            <li>
              <Link to = "/Contact" class="new">Contact Us</Link></li>

            <li>Cart</li>
            <li>Profile</li>

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
          </ul>
        </div>
      </div>
    )
  };

  export default Header;
