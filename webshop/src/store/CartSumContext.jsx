import React, { createContext, useState } from "react";

// 1. Create a context
const CartSumContext = createContext();

// 2. Create a provider component
const CartSumContextProvider = ({ children }) => {
  const [cartSum, setCartSum] = useState(calculateCartSum());

  function calculateCartSum() {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    let sum = 0;
    cartLS.forEach((item) => (sum = sum + item.toode.price * item.kogus));
    return sum.toFixed(2);
  }

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};
// CartSumContext - saan kätte globaalse muutuja ja saan muuta seda
// CartSumContextProvider - võin panna index.js sisse, siis on see üle rakenduse,
//          aga võin ka panna ainult Cart ümber, mis tähendab, et see on kättesaadav
//          vaid Cart componendis ja tema alamates
export { CartSumContext, CartSumContextProvider };
