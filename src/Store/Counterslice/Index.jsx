import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
  name: "counter",

  initialState: 0,

  reducers: {
    increseby1: (state) => state + 1,

    decreaseby1: (state) => state - 1,

    increseby10: (state) => state + 10,

    decreaseby10: (state) => state - 10,
  },
});

export const {
  increseby1,
  decreaseby1,
  increseby10,
  decreaseby10,
} = Counterslice.actions;

export default Counterslice.reducer;