
// const ele = (
//   <h1>HIII</h1>
// );

//react element
// const Title =()=> (
// <h1 className="head" tabIndex="5" >
// {ele}
//   Namaste React using JSX
//   </h1>
// );

// const number = 10000;

//react functional component:
// const HeadingComponent = () =>(
//   <div id="container">
// <Title></Title>
// <h1 className="heading">Namste react Functional Component</h1>;
// </div>
// );


//you can write like this upper and below are same
// const head = ()=><h1 className="heading">Namste react</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeadingComponent/>)

//React.createlement => object =>HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"},"Srushti is here!");

//jsx - HTML like or XML like syntax
// heading is react element
// jsx =>babel transpiles to it react.createelemet=>makes js object=>rendered as HTMLelement
// jsx(transpiled before it reachesthe JS Engine)  parcel-babbel

import React,{lazy,Suspense, useEffect, useState}  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Contact  from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import Grocery from "./components/Grocery";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import InstaStore from "../utils/InstaStore";
import Cart from "./components/Cart";



const Grocery = lazy(()=>import("./components/Grocery"));

const Applayout =()=>{

  //authentication

  const [userName, setUserName] = useState();

  //authentication
  useEffect(()=>{

    //make api call
    const data = {
      name:"Srushti Kulkarni"
    }
    setUserName(data.name);

  },[]);


  return(
    <Provider store={InstaStore}>
    <UserContext.Provider value={{loggedUser:userName}}>
    <div className="app">
    <Header></Header>
    <Outlet></Outlet>
    </div>
    </UserContext.Provider>
    </Provider>
  );

};

//children route
const appRoute = createBrowserRouter([{
  path: "/",
  element: <Applayout/>,
  children: [
    {
      path: "/",
      element: <Body></Body>,
    },
    {
      path:"/about",
      element :<Suspense fallback={<Shimmer/>}><About/></Suspense>,

    },
    {
      path: "/contact",
      element : <Contact/>,
    },
    {
      path: "/Grocery",
      element : <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
    },
    {
      path: "/restaurants/:resId",
      element: <Restaurantmenu/>,
    },
    {
      path: "/Cart",
      element: <Cart/>,
    }

  ],
  errorElement:<Error/>,
},

]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>);

// root.render(<Applayout/>);