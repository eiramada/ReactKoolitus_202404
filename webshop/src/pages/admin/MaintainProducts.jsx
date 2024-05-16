import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
import "../../css/MaintainProducts.css";
import productsFromFile from "./../../data/products.json";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const searchRef = useRef();

  const deleteProduct = (product) => {
    const index = productsFromFile.indexOf(product);
    productsFromFile.splice(index, 1);
    // setProducts(productsFromFile.slice()); otsingu tõttu seda ei kasuta
    searchFromProducts();
  };

  function searchFromProducts() {
    const searchValue = searchRef.current.value.toLowerCase();
    const result = productsFromFile.filter(
      (p) =>
        p.title.toLowerCase().includes(searchValue) ||
        p.description.toLowerCase().includes(searchValue)
    );
    setProducts(result);
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
            <tr key={index}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price.toFixed(2)} €</td>
              <td>{product.description}</td>
              <td>
                <StarRating rating={product.rating.rate} />
                <span>({product.rating.count} reviews)</span>{" "}
              </td>
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
