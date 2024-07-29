
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

import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Contact  from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";

import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";

const Applayout =()=>{
  return(
    <div className="app">
    <Header></Header>
    <Outlet></Outlet>
    </div>
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
      element : <About/>,

    },
    {
      path: "/contact",
      element : <Contact/>,
    },
    {
      path: "/restaurants/:resId",
      element: <Restaurantmenu/>,
    },

  ],
  errorElement:<Error/>,
},

]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>);

// root.render(<Applayout/>);