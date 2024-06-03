import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Card from "../../components/Card";
import CarouselGallery from "../../components/CarouselGallery";
import FilterButton from "../../components/home/FilterButton";
import Product from "../../components/home/Product";
import SortButtons from "../../components/home/SortButtons";
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

  // //pigem ei ole õige, äkki ongi tooteid 0:
  // if (products.length === 0) {
  //   return <Spinner />;
  // }

  return (
    <div>
      <CarouselGallery />

      <Card
        picUrl={""}
        headerText={"Header"}
        contentText={"Content"}
        buttonText={"Button"}
      />
      {isLoading && <Spinner />}
      {!isLoading && (
        <div>
          <div className={styles.buttonGroup}>
            <SortButtons
              products={products}
              setProducts={setProducts}
              dbProducts={dbProducts}
            />

            {categories.map((cat) => (
              <FilterButton
                key={cat}
                cat={cat.name}
                dbProducts={dbProducts}
                setProducts={setProducts}
              />
            ))}

            <br />
            {productCategories.map((cat) => (
              <FilterButton
                cat={cat}
                dbProducts={dbProducts}
                setProducts={setProducts}
              />
            ))}
          </div>
          <div>Total products: {products.length}</div>

          <div className={styles.products}>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
