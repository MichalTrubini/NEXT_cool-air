import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    qty: number
}

const initialState: CartState = {
    qty: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<number>) => {
            state.qty = action.payload
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;