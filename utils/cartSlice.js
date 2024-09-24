import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: 'cart',
    initialState:{
        items:[]

    },
    reducers:{
        addItem :(state, action) =>{

            //Vanilla Redux (old version): we can't mutate in vanilla redux
            //redux used IMMER Library
            //mutating state over here


        state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },

});



export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
