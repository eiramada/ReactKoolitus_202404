import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import ParcelMachines from "../../components/cart/ParcelMachines";
import Payment from "../../components/cart/Payment";
import styles from "../../css/Cart.module.css";
import { CartSumContext } from "../../store/CartSumContext";

function Cart() {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartLS);
  const { setCartSum } = useContext(CartSumContext);

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
    return sum.toFixed(2); //-- sõna
  }

  function productSum() {
    let sum = 0;
    cart.forEach((item) => (sum = sum + item.kogus));
    return sum;
  }

  function saveCart(cart) {
    setCart(cart.slice()); //see muudab htmli
    localStorage.setItem("cart", JSON.stringify(cart)); //see salvestab
    setCartSum(cartSum()); //muudab NavigationBaril kogusummat
  }

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
            <Payment amount={cartSum()} />
            <ParcelMachines />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
