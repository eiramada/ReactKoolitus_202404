import { Button, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../css/Cart.module.css";

function Cart() {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartLS);
  const [parcelMachines, setParcelMachines] = useState([]); //et htmlis näidata.

  //uef -- tehakse päring kohe lehele tulles.
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

  function productSum() {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.kogus));
    return sum;
  }

  function saveCart(cart) {
    setCart(cart.slice()); //see muudab htmli
    localStorage.setItem("cart", JSON.stringify(cart)); //see salvestab
  }

  function pay() {
    //enne maksmist paneme andmebaasi, muuhulgas saame nii ID (order reference)

    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      account_name: "EUR3D1",
      nonce: "32twet" + new Date() + Math.random() * 99999999, //iga kord tuleb muuta
      timestamp: new Date(),
      amount: cartSum(),
      order_reference: Math.random() * 99999999,
      customer_url: "https://err.ee",
      api_username: "92ddcfab96e34a5f",
    };
    const paymentHeaders = {
      Authorization:
        "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json",
    }; //auth

    fetch(url, {
      method: "POST",
      body: JSON.stringify(paymentBody),
      headers: paymentHeaders,
    }) //GET on default.
      .then((response) => response.json())
      .then((json) => (window.location.href = json.payment_link));
  }

  // Kui HTMLs vahetame URLi: <Link to="">
  // Kui Reacti JavaScriptis vahetame URLi const navigate = useNavigate()    navigate("")
  // Kui tahame URLile liikuda mis on väljaspool meie rakendust     window.location.href = "http://err.ee"

  return (
    <div>
      {cart.length > 0 && (
        <>
          <Button onClick={empty}>Empty Cart</Button>
          {cart.map((item, index) => (
            <div className={styles.product} key={index}>
              <div>{index + 1}</div>
              <img
                className={styles.image}
                style={{ width: "100px" }}
                src={item.toode.image}
                alt=""
              />
              <div className={styles.title}>{item.toode.title}</div>
              <div className={styles.price}>{item.toode.price}</div>
              {/* <button onClick={() => decreaseQuantity(item)}>-</button> */}
              <div className={styles.quantity}>
                <img
                  className={styles.button}
                  onClick={() => decreaseQuantity(item)}
                  src="/minus.png"
                  alt=""
                />
                <div>{item.kogus} pcs</div>
                {/* <button onClick={() => increaseQuantity(item)}>+</button> */}
                <img
                  className={styles.button}
                  onClick={() => increaseQuantity(item)}
                  src="/add.png"
                  alt=""
                />
              </div>
              <div className={styles.sum}>
                {(item.toode.price * item.kogus).toFixed(2)}
              </div>
              {/* <button onClick={() => removeFromCart(item, index)}>x</button> */}
              <img
                className={styles.button}
                onClick={() => removeFromCart(item, index)}
                src="/remove.png"
                alt=""
              />
            </div>
          ))}
          <br />
          {/* võimalused cartBottomi nimetamisel.
          // <span className={styles.cart__bottom}>
        // <span className={styles.cartBottom}>
        // <span className={styles['cart-bottom']}> */}
          <div className={styles.cartBottom}>
            <div>Items in cart: {productSum()} pcs</div>
            <div>Total price: {cartSum()}€</div>
            <Button variant="contained" onClick={pay}>
              Pay
            </Button>

            <TextField
              id="standard-select-pm"
              select
              label="Select"
              variant="standard"
              className={styles.muiTextfieldSelect}
            >
              {parcelMachines
                .filter((pm) => pm.A0_NAME === "EE")
                .map((pm) => (
                  <MenuItem key={pm.NAME}> {pm.NAME} </MenuItem>
                ))}
            </TextField>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
