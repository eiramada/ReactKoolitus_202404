import React, { useState } from "react";

function Cart() {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartLS);

  function removeFromCart(productToRemove, index) {
    // const index = cart.findIndex((item) => item.id === productToRemove.id);
    cart.splice(index, 1);
    saveCart(cart);
  }

  function empty() {
    cart.splice(0);
    saveCart(cart);
  }

  function addToEnd(item) {
    cart.push(item);
    saveCart(cart);
  }

  function cartSum() {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.price));
    return parseFloat(sum.toFixed(2));
  }

  function saveCart(cart) {
    setCart(cart.slice()); //see muudab htmli
    localStorage.setItem("cart", JSON.stringify(cart)); //see salvestab
  }

  return (
    <div>
      <button onClick={empty}>Empty Cart</button>
      {cart.map((item, index) => (
        <div key={index}>
          <img style={{ width: "100px" }} src={item.image} alt="" />
          <div>{item.title}</div>
          <div>{item.price}</div>
          <button onClick={() => removeFromCart(item, index)}>x</button>
          <button onClick={() => addToEnd(item)}>Add to the end</button>
        </div>
      ))}
      <br />
      <div>Items in cart: {cart.length} pcs</div>
      <div>Sum: {cartSum()}€</div>
    </div>
  );
}

export default Cart;
