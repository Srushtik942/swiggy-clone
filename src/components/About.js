import React from "react";
// import User from "./user";
import UserClass from "./userclass";
import { render } from "react-dom";
import UserContext from "../../utils/UserContext";

class About extends React.Component{


    constructor(props){
        super(props);
        // console.log("pconst");
    }
    componentDidMount(){
        // console.log("parentcomponentdid");
    }

    render(){
        console.log("prender");
        return(
            <div>
            <h1>About</h1>
            <div>

                <UserContext.Consumer>
                    {({loggedUser})=>(
                         <h1 className="text-xl font-bold">{loggedUser}</h1>
    )}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Srushti (function)"}/> */}
            <UserClass name={"first "} location ={"Pune"}/>
            {/* <UserClass name= {" second"} location ={"Serbia"}/>
            <UserClass name= {" third"} location ={"US"}/> */}
            </div>
        );
    }
}

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