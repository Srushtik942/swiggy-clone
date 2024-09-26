import Lottie from "lottie-react";
import Animation from "./animation.json";
import lottie from "lottie-react";

const Grocery=()=>{

    return (
<div className="bg-orange-300 p-28  ">
    <h1 className="font-extrabold text-center text-3xl">COMING SOON!</h1>

    <p className="font-mono text-center p-2 m-4">We are still working on it!</p>

    {/* <Lottie className="size-40 items-center m-2 p-20 " animationData ={Animation}/> */}
   <form className="flex flex-col justify-center items-center">
   <input type="text" className= "border border-black-200 items-center  p-2 m-4" placeholder="feedback"></input>
   <button className="border-violet-100 p-2 m-2 bg-gray-200 rounded-lg hover:bg-green-300 ">Submit</button>

   </form>

</div>

);

};







export default Grocery;