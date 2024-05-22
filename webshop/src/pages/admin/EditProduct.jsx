import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import NotFound from "../global/NotFound";
// import productsFromFile from "./../../data/products.json";

function EditProduct() {
  const { index } = useParams(); //tegelt on index hoopis productID
  // const product = productsFromFile[index];
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const [products, setProducts] = useState([]);
  const product = products.find((p) => p.id === Number(index));

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProducts(json || []));
  }, [url]);

  if (product === undefined) {
    return <NotFound />;
  }
  function editProduct() {
    const index = products.indexOf(product);

    if (titleRef.current.value === "") {
      setMessage("Product title cannot be empty!");
      return;
    }

    const updatedProduct = {
      title: titleRef.current.value,
      price: Number(priceRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      image: imageRef.current.value,
      rating: {
        rate: Number(ratingRateRef.current.value),
        count: Number(ratingCountRef.current.value),
      },
    };

    products[index] = updatedProduct;
    navigate("/admin/maintain-products");
  }

  return (
    <div>
      <div>{message}</div>
      <label htmlFor="title">Title</label> <br />
      <input
        id="title"
        ref={titleRef}
        type="text"
        defaultValue={product.title}
      />
      <br />
      <label htmlFor="price">Price</label> <br />
      <input
        id="price"
        ref={priceRef}
        type="number"
        defaultValue={product.price}
      />
      <br />
      <label htmlFor="description">Description</label> <br />
      <textarea
        id="description"
        ref={descriptionRef}
        defaultValue={product.description}
      />
      <br />
      <label htmlFor="category">Category</label> <br />
      <input
        id="category"
        ref={categoryRef}
        type="text"
        defaultValue={product.category}
      />
      <br />
      <label htmlFor="image">Image URL</label> <br />
      <input
        id="image"
        ref={imageRef}
        type="text"
        defaultValue={product.image}
      />
      <br />
      <label>Rating</label> <br />
      <StarRating rating={parseFloat(product.rating.rate)} /> <br />
      <label htmlFor="ratingRate">Rate</label> <br />
      <input
        id="ratingRate"
        ref={ratingRateRef}
        type="number"
        step="0.1"
        defaultValue={product.rating.rate}
      />
      <br />
      <label htmlFor="ratingCount">Count</label> <br />
      <input
        id="ratingCount"
        ref={ratingCountRef}
        type="number"
        defaultValue={product.rating.count}
      />
      <br />
      <button onClick={editProduct}>Save</button> <br />
    </div>
  );
}

export default EditProduct;
