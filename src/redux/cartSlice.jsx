import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action) {
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex === -1) {
                state.push(action.payload);
            } else {
                // If item already exists, you can update the quantity or show a message
                // For now, let's just show a message
                // toast.success("Item already in cart");
                console.log("Item already in cart");
            }
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id != action.payload.id);
        },
        clearCart: state => {
            state.cart = [];
          }
    }
})

export const {addToCart, deleteFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;