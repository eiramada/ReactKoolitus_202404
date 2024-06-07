import { configureStore } from "@reduxjs/toolkit";
import cartTotalReducer from "./cartTotalSlice";
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: { counter: counterReducer, cartTotal: cartTotalReducer },
});
