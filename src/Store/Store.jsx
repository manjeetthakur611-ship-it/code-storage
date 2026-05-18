import { configureStore } from "@reduxjs/toolkit";

import Counterslice from "./Counterslice/Index.jsx";
import cartslice from "../Cardslice/Index.jsx";

export const store = configureStore({
  reducer: {
    counter: Counterslice,
    cart: cartslice,
  },
});