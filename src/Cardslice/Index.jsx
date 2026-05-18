import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
    {
      id: 1,
      name: "Laptop",
      price: 80000,
    },

    {
      id: 2,
      name: "Phone",
      price: 30000,
    },

    {
      id: 3,
      name: "Camera",
      price: 50000,
    },
  ],

  cart: [],
};

const cartslice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addtocart: (state, action) => {
      state.cart.push(action.payload);
    },

    removecart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },

    clearcart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addtocart,
  removecart,
  clearcart,
} = cartslice.actions;

export default cartslice.reducer;