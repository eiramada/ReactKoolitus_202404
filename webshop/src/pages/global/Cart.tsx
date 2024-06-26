import { Button } from "@mui/material";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import ParcelMachines from "../../components/cart/ParcelMachines";
import Payment from "../../components/cart/Payment";
import styles from "../../css/Cart.module.css";
import { CartProduct } from "../../models/CartProduct";
import { Product } from "../../models/Product";
import { CartSumContext } from "../../store/CartSumContext";
import {
  empty as cartTotalEmpty,
  decrement,
  decrementByAmount,
  increment,
} from "../../store/cartTotalSlice";
import {
  decrement as d,
  increment as i,
  incrementByAmount,
} from "../../store/counterSlice";

function Cart() {
  const cartLS: CartProduct[] = useMemo(
    () => JSON.parse(localStorage.getItem("cart") || "[]"),
    []
  );
  const [cart, setCart] = useState<CartProduct[]>([]);
  const { setCartSum } = useContext(CartSumContext);
  const dispatch = useDispatch(); //kui dispatch toimub, siis reduxi muutuja muutub.

  const url = process.env.REACT_APP_PRODUCTS_DB_URL || "";

  //useCallbackita läheb findCartProductsWithDbProducts loopima
  //kui on const, siis see peab olema enne useEffecti = järjekord on oluline
  const findCartProductsWithDbProducts = useCallback(
    (json: Product[]) => {
      const cartWithOriginalProducts: CartProduct[] = cartLS
        .map((cartProduct) => ({
          kogus: cartProduct.kogus,
          toode: json.find((p) => p.id === cartProduct.toode.id),
        }))
        .filter((item): item is CartProduct => item.toode !== undefined);
      setCart(cartWithOriginalProducts);
    },
    [cartLS]
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json: Product[]) => {
        findCartProductsWithDbProducts(json);
      });
  }, [url, findCartProductsWithDbProducts]);

  function removeFromCart(index: number) {
    dispatch(incrementByAmount(cart[index].kogus));
    dispatch(decrementByAmount(cart[index].kogus));
    // const index = cart.findIndex((item) => item.id === productToRemove.id);
    cart.splice(index, 1);
    saveCart(cart);
  }

  function empty() {
    dispatch(cartTotalEmpty());
    cart.splice(0);
    saveCart(cart);
  }

  const decreaseQuantity = (item: CartProduct) => {
    dispatch(d());
    dispatch(decrement());

    item.kogus--;
    if (item.kogus === 0) {
      const index = cart.indexOf(item);
      cart.splice(index, 1);
    }
    saveCart(cart);
  };

  const increaseQuantity = (item: CartProduct) => {
    dispatch(i());
    dispatch(increment());

    item.kogus++;
    saveCart(cart);
  };

  function cartSum() {
    let sum = 0;
    cart.forEach(
      (item: CartProduct) => (sum = sum + item.toode.price * item.kogus)
    );
    return sum.toFixed(2); //-- sõna
  }

  function productSum() {
    let sum = 0;
    cart.forEach((item: CartProduct) => (sum = sum + item.kogus));
    return sum;
  }

  function saveCart(cart: any) {
    setCart(cart.slice()); //see muudab htmli
    localStorage.setItem("cart", JSON.stringify(cart)); //see salvestab
    setCartSum(cartSum()); //muudab NavigationBaril kogusummat
  }

  return (
    <div>
      {cart.length > 0 && (
        <>
          <Button onClick={empty}>Empty Cart</Button>
          {cart.map((item: CartProduct, index: number) => (
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
                onClick={() => removeFromCart(index)}
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
