import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["burger","momos"],
    },
    reducers:{
        // dispatch action (addItem) then call reducer function
        addItem:function reducer(state,action){
                state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
               state.items.length=0; //[]
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;