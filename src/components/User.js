
import { useEffect, useState } from "react";
const User=({name})=>{

    const[count] =useState(0);
    console.log(count);
    const[count2]=useState(1);

    useEffect(()=>{

    })


    return (
    <div className="usercard m-4 p-4 bg-gray-50 rounded-lg">
        <h1>Count={count}</h1>
        <h1>Count2={count}</h1>
        <h2>Name:{name} </h2>
        <h3>Location:Pune</h3>
        <h4>Contact: srushtikulkarni09@gmail.com</h4>
    </div>
    );
};

export default User;