import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(sate,action)=>{
            sate.push(action.payload)
        },
        
    }
    
})
export const {addToCart} =cartSlice.actions
export default cartSlice.reducer