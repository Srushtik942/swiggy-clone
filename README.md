#Namste-react
#created production ready app
#handled api's
#food Ordering app
#parcel
/**
 * Header
 *   -Logo
 *   -Navbar
 * Body
 *   -Serach
 *   -restaurant container
 *    -restro card
 *      -img
 *      -name of res
 *      -cuisines,delievery time
 * Footer
 *  -copyright
 *  -links
 *  -address
 *
 **/
# react hooks
-(normal js utility functions)
-useState()  -superpowerful state varoable in react
- useEffect()
-import these hooks as named import
- {}

#API CALling from other website to our website


seEffect(()=>{
  fetchData();
},[]);

const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437");


  const json = await data.json();

  console.log(json);

};

#CORS: Cross Origin resource Sharing
-it enables to controlled access to resources located outside of given domain
#Insted of CORS plugin we can use corsproxy.io

---
# 2 types of routing
-Client Side Routing
-Server Side Rou ting


# parcel
- Dev build
- Local server
- Bundling
- Error Handling

# Redux Toolkit

 -Install @reduxjs/toolkit and react-redux
 -Build our store
 -Connect store to app
 -Slice (Cart slice)
 - Dispatch Action
 -Read the data using Selector



 # Types of testing (developer)

  -Unit Testing: we can test one component in isolation
  -Integration Testing: Testing the integration of component
  -End to End Testing -(e2e testing): Testing react application as sson as user land on the web site and user leaving the website



# Setting up testing in our app
 - install react testing library
 - installed jest
 - installed babel dependencies
 - configured babel
 - configure Parcel config file to disable default   babel transpilation
 - Jest Configuration (npx jest init)
 -jsdom(environment for testing)
 -Install @babel/preset-react to make jsx work in test case
 -Include @babel/preset-react inside my babel config
 -Install @testing-library/jest-dom