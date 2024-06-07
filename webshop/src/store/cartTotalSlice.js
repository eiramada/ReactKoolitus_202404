import { createSlice } from "@reduxjs/toolkit";

function setInitialCart() {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

  let sum = 0;
  cartLS.forEach((item) => (sum = sum + item.kogus));
  return sum;
}

export const cartTotalSlice = createSlice({
  name: "cartTotal",
  initialState: {
    value: setInitialCart(),
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    decrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    empty: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, decrementByAmount, empty } =
  cartTotalSlice.actions;

export default cartTotalSlice.reducer;
