import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/HomePage.module.css";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((json) => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
        console.log("Siia tuleb hiljem, alles siis, kui päring valmis on");
        const result = [...new Set(json.map((product) => product.category))]; //kuidas saada unikaalsed väärtused
        setProductCategories(result);
      });

    console.log("Siia tuleb enne");
  }, [url]);

  useEffect(() => {
    fetch(categoriesUrl)
      .then((result) => result.json())
      .then((json) => setCategories(json || []));
  }, [categoriesUrl]);

  function addToCart(product) {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cartLS.findIndex((p) => p === product);
    const foundProduct = cartLS.find((p) => p.toode.id === product.id);
    if (foundProduct !== undefined) {
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

  function filterByCategory(categoryClicked) {
    // setProducts(dbProducts); //-> polegi õige. setid tehakse alles siis, kui funktsioon läbi saab. :( isegi siis, kui set on mõne teise meetodi sees, nt reseti sees
    const result = dbProducts.filter(
      (p) => p.category.toLowerCase() === categoryClicked
    );
    setProducts(result);
  }

  function reset() {
    setProducts(dbProducts);
  }

  // //pigem ei ole õige, äkki ongi tooteid 0:
  // if (products.length === 0) {
  //   return <Spinner />;
  // }

  return (
    <div>
      <CarouselGallery />

      {isLoading && <Spinner />}
      {!isLoading && (
        <div>
          <div className={styles.buttonGroup}>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={sortAZ}>Sort A-Z</Button>
            <Button onClick={sortZA}>Sort Z-A</Button>
            <Button onClick={sortPriceAsc}>Sort Price asc</Button>
            <Button onClick={sortPriceDesc}>Sort Price desc</Button>

            {categories.map((cat) => (
              <Button key={cat.name} onClick={() => filterByCategory(cat.name)}>
                {cat.name}
              </Button>
            ))}
<br /><br />
            {productCategories.map((cat) => (
              <Button key={cat} onClick={() => filterByCategory(cat)}>
                {cat}
              </Button>
            ))}
          </div>

          <div>Total products: {products.length}</div>

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
      )}
    </div>
  );
}

export default HomePage;
