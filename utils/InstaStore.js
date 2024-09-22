import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const InstaStore = configureStore({

    reducer:{
        cart : cartReducer,
    },

}
);
export default InstaStore;