import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    justAdded: null
  },
  reducers: {
    add: (state, action) => {
      let done = false;
      if (typeof action.payload === "object") {
        if (state.cart.length !== 0) {
          state.cart.map((item, index) => {
            if (action.payload.id === item.id) {
              console.log(action.payload);
              console.log(state.cart);
              state.cart = [
                ...state.cart.slice(0, index),
                {
                  ...state.cart[index],
                  quantity: state.cart[index].quantity + 1
                },
                ...state.cart.slice(index + 1)
              ];
              done = true;
              return;
            }
          });
        }
        if (!done) {
          state.cart = [...state.cart, action.payload];
        }
        state.justAdded = action.payload;
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
    },

    incrementQuantity: (state, action) => {
      if (typeof action.payload === "object"){
        if(action.payload.hasOwnProperty("id")) {
          state.cart.map((item, index) => {
            if (item.id === action.payload.id) {
              state.cart = [
                ...state.cart.slice(0, index),
                {
                  ...state.cart[index],
                  quantity: state.cart[index].quantity + 1
                },
                ...state.cart.slice(index + 1)
              ];
            }
          })
        }
      }
    },
    decrementQuantity: (state, action) => {
      if (typeof action.payload === "object"){
        if(action.payload.hasOwnProperty("id")) {
          state.cart.map((item, index) => {
            if (item.id === action.payload.id) {
              if(item.quantity - 1 <= 0){
                state.cart = [
                  ...state.cart.slice(0, index),
                  ...state.cart.slice(index + 1)
                ];
              } else {
                state.cart = [
                  ...state.cart.slice(0, index),
                  {
                    ...state.cart[index],
                    quantity: state.cart[index].quantity - 1
                  },
                  ...state.cart.slice(index + 1)
                ];

              }
            }
          })
        }
      }
    },
    removeJustAdded: (state, action) => {
      state.justAdded = null;
    }
  }
});

export const { add, remove, removeJustAdded, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectAdded = (state) => state.cart.justAdded;
export default cartSlice.reducer;
