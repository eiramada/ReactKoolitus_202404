import { Button } from "@mui/material";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../css/HomePage.module.css";
import { CartSumContext } from "../../store/CartSumContext";
import { increment as cartTotalincrement } from "../../store/cartTotalSlice";
import { increment } from "../../store/counterSlice";

//({product}) --> lühendatud versioon (props) variandist, object destructing
function Product({ product }) {
  const { setCartSum } = useContext(CartSumContext);
  const dispatch = useDispatch();

  function addToCart(product) {
    dispatch(increment());
    dispatch(cartTotalincrement());

    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cartLS.findIndex((p) => p === product);
    const foundProduct = cartLS.find((p) => p.toode.id === product.id);
    if (foundProduct !== undefined) {
      cartLS[index] = "";
      foundProduct.kogus++;
    } else {
      cartLS.push({ kogus: 1, toode: product });
    }

    let sum = 0;
    cartLS.forEach((item) => (sum = sum + item.toode.price * item.kogus));

    setCartSum(sum.toFixed(2));
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  return (
    <div className={styles.product}>
      <img style={{ width: "100px" }} src={product.image} alt="" />
      <div>
        {product.title.length > 50
          ? product.title.substring(0, 50) + "..."
          : product.title}
      </div>
      <div>{product.price.toFixed(2)} €</div>
      <Button onClick={() => addToCart(product)} variant="contained">
        Add to Cart
      </Button>
      <Link
        to={`/product/${product.title
          .replaceAll(" ", "-")
          .replaceAll(",", "")
          .toLowerCase()}`}
      >
        <Button variant="outlined">View Details</Button>
      </Link>
    </div>
  );
}

export default Product;
