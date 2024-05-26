import React, { useEffect, useRef, useState } from "react";

function AddProduct() {
  const [message, setMessage] = useState("Add a new product");
  const [products, setProducts] = useState([]); //usestate & db päring käivad kokku, kuigi tavaliselt on usestate htmliga kokku
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const idRef = useRef();
  const [idUnique, setIdUnique] = useState(true);

  const url = process.env.REACT_APP_PRODUCTS_DB_URL;

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
      .then((json) => setProducts(json || []));
  }, [url]);

  const validateForm = () => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    if (!name) {
      return "Error: Product must have a name";
    } else if (name[0] !== name[0].toUpperCase()) {
      return "Error: Product name must start with a capital letter";
    } else if (name.includes("/")) {
      return "Error: Product name cannot contain slashes";
    } else if (price && isNaN(price)) {
      return "Error: Price must be numeric";
    } else if (price && Number(price) <= 0) {
      return "Error: Price must be greater than 0";
    }
    return "";
  };

  const checkIdUniqueness = () => {
    const result = products.find((p) => p.id === Number(idRef.current.value));
    setIdUnique(result === undefined);
  };

  const addProduct = () => {
    const validationMessage = validateForm();
    if (!idUnique) {
      setMessage("Error: Product ID must be unique");
      return;
    }
    if (validationMessage) {
      setMessage(validationMessage);
    } else {
      const newProduct = {
        id: Number(idRef.current.value),
        title: nameRef.current.value,
        price: Number(priceRef.current.value),
        image: imageRef.current.value,
        description: descriptionRef.current.value,
        rating: {
          rate: 0,
          count: 0,
        },
        active: true,
        category: categoryRef.current.value,
      };

      products.push(newProduct);
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(products),
      });

      setProducts(products);
      setMessage(`Product ${nameRef.current.value} added!`);
      resetFields();
    }
  };

  const resetFields = () => {
    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
  };

  return (
    <div>
      <br />
      <div>{message}</div> <br />
      <br />
      <label htmlFor="id">ID</label>
      <br />
      <input id="id" ref={idRef} type="number" onChange={checkIdUniqueness} />
      <br />
      <br />
      <label htmlFor="name">Name</label> <br />
      <input id="name" ref={nameRef} type="text" />
      <br /> <br />
      <label htmlFor="price">Price</label>
      <br />
      <input id="price" ref={priceRef} type="number" />
      <br /> <br />
      <label htmlFor="image">Image URL</label> <br />
      <input id="image" ref={imageRef} type="text" />
      <br /> <br />
      <label htmlFor="description">Description</label> <br />
      <input id="description" ref={descriptionRef} type="text" />
      <br /> <br />
      <label htmlFor="category">Category</label> <br />
      <select ref={categoryRef}>
        <option key="0">--- SELECT CATEGORY ---</option>
        {categories.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
      {/* <input id="category" ref={categoryRef} type="text" /> */}
      <br />
      <br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;
