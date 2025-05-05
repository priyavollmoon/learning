
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const old = state.cartItems.find((i) => i.id === item.id);
      if (old) {
        old.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeCart(state, action) {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    increase(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrease(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeCart, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
