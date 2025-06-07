import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice";


const appStore=configureStore({
// this reducer is responsible for modifying appStore
// and it consists of reducers of the different slices inside the store
   reducer:{

    // added cartSlice recognised by name cart to our appStore
      cart:cartReducer,
   }
})
export default appStore;