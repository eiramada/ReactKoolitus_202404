import React, { useEffect, useState } from "react";

function Cart() {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartLS);
  const [parcelMachines, setParcelMachines] = useState([]); //et htmlis näidata.

  //uef
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json") //saadud aadressilt https://jsonplaceholder.typicode.com/
      .then((response) => response.json())
      .then((json) => setParcelMachines(json));
  }, []);

  function removeFromCart(productToRemove, index) {
    // const index = cart.findIndex((item) => item.id === productToRemove.id);
    cart.splice(index, 1);
    saveCart(cart);
  }

  function empty() {
    cart.splice(0);
    saveCart(cart);
  }

  const decreaseQuantity = (item) => {
    item.kogus--;
    if (item.kogus === 0) {
      const index = cart.indexOf(item);
      cart.splice(index, 1);
    }
    saveCart(cart);
  };

  const increaseQuantity = (item) => {
    item.kogus++;
    saveCart(cart);
  };

  function cartSum() {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.toode.price * item.kogus));
    return sum.toFixed(2);
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
          <img style={{ width: "100px" }} src={item.toode.image} alt="" />
          <div>{item.toode.title}</div>
          <div>{item.toode.price}</div>
          <button onClick={() => increaseQuantity(item)}>+</button>
          <div>{item.kogus}</div>
          <button onClick={() => decreaseQuantity(item)}>-</button>
          <div>{(item.toode.price * item.kogus).toFixed(2)}</div>
          <button onClick={() => removeFromCart(item, index)}>x</button>
        </div>
      ))}
      <br />
      <div>Items in cart: {cart.length} pcs</div>
      <div>Total price: {cartSum()}€</div>
      <select>

        {parcelMachines
          .filter((pm) => pm.A0_NAME === "EE")
          .map((pm) => (
            <option> {pm.NAME} </option>
          ))}
      </select>
    </div>
  );
}

export default Cart;
