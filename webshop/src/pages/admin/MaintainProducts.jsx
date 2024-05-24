import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
import styles from "../../css/MaintainProducts.module.css";
// import productsFromFile from "./../../data/products.json";

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]); //et esialgne seis alles oleks.
  const searchRef = useRef();
  const [isLoading, setLoading] = useState(true);

  const url = process.env.REACT_APP_PRODUCTS_DB_URL;

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((json) => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      });
  }, [url]);

  const deleteProduct = (product) => {
    const index = dbProducts.indexOf(product);
    dbProducts.splice(index, 1);
    // setProducts(productsFromFile.slice()); otsingu tõttu seda ei kasuta
    searchFromProducts();
  };

  function searchFromProducts() {
    const searchValue = searchRef.current.value.toLowerCase();
    const result = dbProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchValue) ||
        p.description.toLowerCase().includes(searchValue)
    );
    setProducts(result);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchRef} type="text"></input>
      <span>{products.length} pcs</span>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              className={product.active ? styles.active : styles.inactive}
              key={index}
            >
              <td>{product.id}</td>
              <td>
                <img
                  className={styles.image}
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price} €</td>
              <td>{product.description}</td>
              <StarRating rating={product.rating.rate} />
              <td>
                <button onClick={() => deleteProduct(product)}>Delete</button>
                <Link to={`/admin/edit-product/${product.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintainProducts;
