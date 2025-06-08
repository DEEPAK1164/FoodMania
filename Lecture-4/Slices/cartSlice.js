import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        // dispatch action (addItem) then call reducer function
        addItem:function reducer(state,action){
                state.items.push(action.payload);
        },
        // Remove item by index
    removeItem: (state, action) => {
      const index = action.payload; // index of the item to remove
      if (index >= 0 && index < state.items.length) {
        state.items.splice(index, 1);
      }
    },
        clearCart:(state,action)=>{
            //RTK says u can mutate the state or return a new state
               state.items.length=0; //[]

               // OR 
               // return {items:[]};
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;