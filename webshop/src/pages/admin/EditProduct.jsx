import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import NotFound from "../global/NotFound";
// import productsFromFile from "./../../data/products.json";

function EditProduct() {
  const { index } = useParams(); //tegelt on index hoopis productID
  // const product = productsFromFile[index];
  const titleRef = useRef();
  const idRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const [products, setProducts] = useState([]);
  const product = products.find((p) => p.id === Number(index));
  const [isLoading, setLoading] = useState(true);
  const [idUnique, setIdUnique] = useState(true);

  const [categories, setCategories] = useState([]);
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;
  useEffect(() => {
    fetch(categoriesUrl)
      .then((result) => result.json())
      .then((json) => setCategories(json || []));
  }, [categoriesUrl]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      });
  }, [url]);

  if (isLoading) {
    return <Spinner />;
  }

  if (product === undefined) {
    return <NotFound />;
  }
  function editProduct() {
    if (idUnique) {
      if (titleRef.current.value === "") {
        setMessage("Product title cannot be empty!");
        return;
      }
    }

    const index = products.indexOf(product);

    const updatedProduct = {
      id: Number(idRef.current.value),
      title: titleRef.current.value,
      price: Number(priceRef.current.value),
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      image: imageRef.current.value,
      active: activeRef.current.checked,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    };

    products[index] = updatedProduct;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(products),
    }).then(() => navigate("/admin/maintain-products")); //muidu navigeerib enne ära, kui fetch lõpetab.
  }

  function checkIdUniqueness() {
    if (idRef.current.value === index) {
      setIdUnique(true);
      return;
    }

    // const result = products.filter((p) => p.id === Number(idRef.current.value));
    // setIdUnique(result.length === 0);
    const result = products.find((p) => p.id === Number(idRef.current.value));
    setIdUnique(result.length === undefined);
  }

  return (
    <div>
      {!idUnique && <div>Inserted ID is not unique</div>}
      <div>{message}</div>
      <label htmlFor="id"></label>
      <br />
      <input
        onChange={checkIdUniqueness}
        type="number"
        ref={idRef}
        id="id"
        defaultValue={product.id}
      />
      <br />
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
      <select ref={categoryRef} defaultValue={product.category}>
        <option key="0">--- SELECT CATEGORY ---</option>
        {categories.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
      <br />
      <label htmlFor="image">Image URL</label> <br />
      <input
        id="image"
        ref={imageRef}
        type="text"
        defaultValue={product.image}
      />
      <br />
      <label htmlFor="active">Active</label> <br />
      <input
        id="active"
        ref={activeRef}
        type="checkbox"
        defaultChecked={product.active}
      />
      <br />
      <br />
      <label>Rating</label> <br />
      <StarRating rating={parseFloat(product.rating.rate)} /> <br />
      <button disabled={!idUnique} onClick={editProduct}>
        Save
      </button>
      <br />
    </div>
  );
}

export default EditProduct;
