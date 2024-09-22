import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
const Itemlist =  ({items})=>{

 console.log(items);



const dispatch = useDispatch();

const handleAddItem = (item) =>{
        //dispatch an action
 dispatch(addItem(item));


};
return (
<div>
        {
        items.map((item)=> <div key={item?.card?.info?.id} className="p-2 m-4  border-gray-200  border-b-2 shadow-sm text-left">

<div className="w-3/12 p-4 mx-98 ">
           <div className=" absolute ">
            <button className="p-2 mb-1 mx-24 rounded-lg bg-green-100 text-black shadow-lg  "
            onClick={()=> handleAddItem(item)}
            >Add +
            </button>
            </div>
            <img src=
            { CDN_URL + item?.card?.info?.imageId}className="w-full" />

            </div>

            <div className="w-9/12">

            <div className="py-2">

                <span  className="font-bold">{item?.card?.info?.name}</span>
                <span className="font-bold"> - ₹
                    {item?.card?.info?.price/100}</span>
            </div>
           <p className="text-sm">{item?.card?.info?.description} </p>

           </div>



        </div>
        )}

</div>
);

}
export default Itemlist;