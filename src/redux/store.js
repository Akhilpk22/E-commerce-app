import { configureStore } from "@reduxjs/toolkit";
import WishListSlice from "./Slice/WishListSlice";
// this store will be provide 

const store = configureStore({
    // when reducer 
    reducer:{
        // the wishlistreducer  reducer will called 
       wishListReducer:WishListSlice

    }
})
export default store;