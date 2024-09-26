const Contact = ()=>{
    return(
    <div className="bg-yellow-100 pt-10 flex flex-col justify-center items-center w-screen">

        <h1 className="font-bold text-3xl p-4  ">Contact Us</h1>
        <form>
        <input type="text" className= "shadow-md border border-gray-300 p-2 m-2 rounded-md dark:focus:border-orange-500 " placeholder="jhon doe"></input>
        <br></br>
        <input type="text" className= "shadow-md border border-gray-300 p-2 m-2 rounded-md dark:focus:border-orange-500 " placeholder="jhondoe@gmail.com"></input>
        <br></br>
        <input type="text" className="shadow-md border border-gray-300 p-2 m-2 rounded-md" placeholder="feedback"></input>
        <br></br>
        <button className="border-black p-2 m-2 bg-gray-200 rounded-lg hover:bg-orange-400  ">send a message </button>
        </form>
        <br>
        </br>
        <footer>
        <div className="text-center">
<h1>© 2024 Copyright:<b className="text-slate-600 ">Foodzee.com</b></h1>
</div>
        </footer>

    </div>
    );
};
export default Contact;

//rafce create boiler plate for Functional Component

