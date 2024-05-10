import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsFromFile from "./../../data/products.json";
import "./MaintainProducts.css";
import StarRating from "../../components/StarRating";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  };

  return (
    <div>
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
              <td>${product.price.toFixed(2)}</td>
              <td>{product.description}</td>
              <td>
                <StarRating rating={product.rating.rate} />
                <span>({product.rating.count} reviews)</span>{" "}
              </td>
              <td>
                <button onClick={() => deleteProduct(index)}>Delete</button>
                <Link to={`/edit-product/${product.id}`}>
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
