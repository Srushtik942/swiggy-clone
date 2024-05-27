
import { useState } from "react";
const Header = ()=>{
  // const btnName = "login";

  const[btnNAmeReact , setbtnNAmereact] = useState("Login");
    return(
      <div className="header">
        <div className="logo">
          <img  src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ychB0gzKUiciTunIPeII_aIoptW3k81YQpa0wryEFA&s"/>
        </div>
        <div className="navitem">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
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
