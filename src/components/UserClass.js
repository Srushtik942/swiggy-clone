//class based components
import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           userInfo:{
            name:"Dummy",
            location:"Defaultlocation",
            avatar_url:"http//dummy.com"
           },
        };
console.log(this.props.name +"childconstructor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Srushtik942");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }

    componentDidUpdate(){
        console.log("COmponentdidupdate")
    }

    componentWillUnmount(){
        console.log("Component unmount")
    }

     render(){
        // destructuring
        const {name, location,avatar_url} = this.state.userInfo;
        // console.log(this.props.name +"childrender");
        return (
        <div className="usercard">
            <img src={avatar_url}/>
            <h2>Name:{name} </h2>
            <h3>Location:{location}</h3>
            <h3>Location:Pune</h3>
            <h4>Contact: srushtikulkarni09@gmail.com</h4>
        </div>
        );
     }
}
export default UserClass;




/**
 *
-------------mounting lifecycle----------
constructor(dummy)
Render(dummy)
<html dummy>

component did mount
<api call>
<this.setate>


--------update---------

render(Api call)
<html lodaded (with new api data)

componentdid update


 */