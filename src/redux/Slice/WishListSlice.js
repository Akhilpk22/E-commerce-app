import { createSlice } from "@reduxjs/toolkit";
// createSlice define methord are comming in the file 
const WishListSlice = createSlice({
    name:"wishlist",
    initialState:[],
    // action create in the file 
    // the the state in tialstate and update in the action same  
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload)


        },
        removeToWishList:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
        

    }


})

export const {addToWishList,removeToWishList}= WishListSlice.actions
export default WishListSlice.reducer