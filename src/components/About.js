import React from "react";
// import User from "./user";
import UserClass from "./userclass";
import { render } from "react-dom";
import UserContext from "../../utils/UserContext";

// class About extends React.Component{


//     constructor(props){
//         super(props);
//         // console.log("pconst");
//     }
//     componentDidMount(){
//         // console.log("parentcomponentdid");
//     }

//     render(){
//         console.log("prender");
//         return(
//             <div>
//             <h1>About</h1>
//             <div>

//                 <UserContext.Consumer>
//                     {({loggedUser})=>(
//                          <h1 className="text-xl font-bold">{loggedUser}</h1>
//     )}
//                 </UserContext.Consumer>
//             </div>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User name={"Srushti (function)"}/> */}
//             <UserClass name={"first "} location ={"Pune"}/>
//             {/* <UserClass name= {" second"} location ={"Serbia"}/>
//             <UserClass name= {" third"} location ={"US"}/> */}
//             </div>
//         );
//     }
// }

const About =()=>{
    return(
        <div className="bg-yellow-100 m-2 p-2  shadow-sm ">
            <h1 className="font-extrabold text-3xl text-center">About Us</h1>
            <br></br>
            <p className="font-serif text-wrap flex-wrap ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

           <br></br>

           <div class="max-w-md mx-auto bg-orange-300 shadow-lg rounded-lg overflow-hidden">
  <div class="flex ">

    <div class="w-1/3 ">
      <img class="object-cover w-full h-full" src="https://media.istockphoto.com/id/1163294201/photo/smiling-confident-businesswoman-posing-with-arms-folded.jpg?s=612x612&w=0&k=20&c=9SY62tujbyx46_NbVH6pYAauliGvM0ixcaEfup9y_kU=" alt="Card Image"></img>
    </div>

    <div class="w-2/3 p-4">
      <h2 class="text-xl font-bold mb-2">Founder</h2>
      <p class="text-gray-600 mb-4">
      Rachel Andrew, the founder of Zomato, didn't set out to create a global platform. The journey began with a simple observation she and her colleagues were constantly struggling to find updated menus for nearby restaurants.
      </p>
      <a href="#" class="text-blue-500 hover:underline">Read More</a>
    </div>
  </div>
</div>
<br></br>
<footer>
    <br></br>
<h1 className="font-bold text-3xl text-center">Our Parteners</h1>

<div class="flex  items-center justify-center">
    <div class="py-4"><img className="w-40 rounded-lg flex items-center justify-center  hover:scale-110" src="https://i.pinimg.com/originals/36/7c/d4/367cd4a3a1510bf52f1acbea26228a57.jpg"></img></div>
    <div class="py-4 mx-4 "><img className="w-24 rounded-lg hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/768px-Zomato_logo.png"></img></div>
    <div class="py-4"><img className="w-32  rounded-lg hover:scale-110" src="https://thehardcopy.co/wp-content/uploads/Zepto-Featured-Image-Option-2.png" alt="" /></div>

</div>
<br></br>
<div className="text-center">
<h1>© 2024 Copyright:<b className="text-slate-600 ">Foodzee.com</b></h1>
</div>
</footer>


        </div>


    );

};

export default About;


// - parent constructor
// - parent render

//    - firstchild constructor
//    - firstchild render
  // -fisrtchildcomponentdidmount

    //   -secondchild constructor
    //   -csecondchild render
        // -secondchildcomponentdidmount

    // <dom manipulation begin




// -parent componentDidMount