import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/HomePage.module.css";
import productsFromFile from "./../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  function addToCart(product) {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cartLS.findIndex((p) => p === product);
    const foundProduct = cartLS.find((p) => p.toode.id === product.id);
    if (foundProduct !== undefined) {
      //index >= 0 või index !== -1    <-- toodet ja selle indexit ei leitud
      cartLS[index] = "";
      foundProduct.kogus++;
    } else {
      cartLS.push({ kogus: 1, toode: product });
    }

    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  function sortAZ() {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  function sortZA() {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  function sortPriceAsc() {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  function sortPriceDesc() {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  function filterByCategory(category) {
    reset();
    const result = products.filter((p) => p.category === category);
    setProducts(result);
  }

  function reset() {
    setProducts(productsFromFile);
  }

  return (
    <div>
      <CarouselGallery />

      <div className={styles.buttonGroup}>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={sortAZ}>Sort A-Z</Button>
        <Button onClick={sortZA}>Sort Z-A</Button>
        <Button onClick={sortPriceAsc}>Sort Price asc</Button>
        <Button onClick={sortPriceDesc}>Sort Price desc</Button>

        <Button onClick={() => filterByCategory("men's clothing")}>
          men's clothing
        </Button>
        <Button onClick={() => filterByCategory("jewelery")}>jewelery</Button>
        <Button onClick={() => filterByCategory("electronics")}>
          electronics
        </Button>
      </div>
      <div className={styles.products}>
        {products.map((product) => (
          <div className={styles.product} key={product.id}>
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
        ))}
      </div>
    </div>
  );
}

export default HomePage;
