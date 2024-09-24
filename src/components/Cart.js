import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./itemList";
import { clearCart } from "../../utils/cartSlice";


const Cart =()=>{

    const cartItems = useSelector((store)=>store?.cart?.items);

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
    <div className="text-center m-7 p-17 ">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
    <button className="p-2 m-4 bg-red-400 text-white rounded-lg"
    onClick={handleClearCart}
    >

    Clear Cart
    </button>
    {cartItems.length === 0 && (<div className="m-2 p-2"><img src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"></img> </div>)
    }
     <Itemlist items={cartItems}/>
    </div>
    </div>
    );
};

export default Cart;