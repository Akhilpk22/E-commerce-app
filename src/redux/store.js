import { configureStore, createSlice } from "@reduxjs/toolkit";
import WishListSlice from "./Slice/WishListSlice";
import cartSlice from "./Slice/cartSlice";

// this store will be provide 

const store = configureStore({
    // when reducer 
    reducer:{
        // the wishlistreducer  reducer will called 
       wishListReducer:WishListSlice,
       cartReducer:cartSlice

    }
})
export default store;