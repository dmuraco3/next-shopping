import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    add: (state, action) => {
      if (typeof action.payload === "object") {
        if (state.cart.length !== 0) {
          for (let x = 0; x <= state.cart.length; x++) {
            if (state.cart[x].id === action.payload.id) {
              state.cart = [
                ...state.cart.slice(0, x),
                {
                  ...state.cart[x],
                  quantity: state.cart[x].quantity + 1
                },
                ...state.cart.slice(x + 1)
              ];
              return;
            }
          }
        }
        state.cart = [...state.cart, action.payload];
      } else {
        console.error("Cannot add item to cart!");
      }
    },

    remove: (state, action) => {
      if (typeof action.payload === "number") {
        state.cart = [
          ...state.cart.slice(0, action.payload),
          ...state.cart.slice(action.payload + 1)
        ];
      }
    }
  }
});

export const { add, remove } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
