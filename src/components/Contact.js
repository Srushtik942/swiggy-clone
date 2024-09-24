const Contact = ()=>{
    return(
    <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
        <form>
        <input type="text" className= "border border-black p-2 m-2" placeholder="name"></input>
        <input type="text" className="border border-black p-2 m-2" placeholder="feedback"></input>
        <button className="border-black p-2 m-2 bg-gray-200 rounded-lg hover:bg-green-300 ">Submit</button>
        </form>

    </div>
    );
};
export default Contact;

//rafce create boiler plate for Functional Component

