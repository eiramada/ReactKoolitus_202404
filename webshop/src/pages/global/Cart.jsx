import React, { useState } from "react";
import cartFromFile from "./../../data/cart.json";

function Cart() {
  const [cart, setCart] = useState(cartFromFile);

  function removeFromCart(productToRemove) {
    const index = cart.findIndex((item) => item.id === productToRemove.id);
    cartFromFile.splice(index, 1);
    setCart(cartFromFile.slice());
  }

  function empty() {
    cartFromFile.splice(0);
    setCart(cartFromFile.slice());
  }

  function addToEnd(item) {
    cartFromFile.push(item);
    setCart(cartFromFile.slice());
  }

  function cartSum() {
    let sum = 0;
    cartFromFile.forEach((item) => (sum = sum + item.price));
    return sum;
  }

  return (
    <div>
      <button onClick={empty}>Empty Cart</button>
      {cart.map((item) => (
        <div key={item.id}>
          {item.title}
          <button onClick={() => removeFromCart(item)}>X</button>
          <button onClick={() => addToEnd(item)}>Add More</button>
        </div>
      ))}
      <div>Items in cart: {cart.length} </div>
      <div>Sum: {cartSum()}€</div>
    </div>
  );
}

export default Cart;
