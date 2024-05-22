import React, { useEffect, useRef, useState } from "react";

// SIIA AADRESSILE PÄRING: REACT_APP_SHOPS_DB_URL
// samamoodi nagu categories:
// võtmine, lisamine, kustutamine

// const newShop = {name: "", lat: 0, long: 0, openTime: ""}
// .push()
function MaintainShops() {
  const [shops, setShops] = useState([]);
  const nameRef = useRef();

  const url = process.env.REACT_APP_SHOPS_DB_URL;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setShops(json || []));
  }, [url]);

  function add() {
    const newshop = {
      name: nameRef.current.value,
      lat: "",
      long: "",
      openTime: "",
    };
    shops.push(newshop);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(shops),
    });
    setShops(shops.slice());
    //toast?
    nameRef.current.value = "";
  }

  function remove(index) {
    shops.splice(index, 1);
    setShops(shops.slice());

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(shops),
    });
  }

  return (
    <div>
      <label>Shop Name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Lat</label> <br />
     
      <hr />
      {shops?.map((category, index) => (
        <div key={category.name}>
          {category.name}
          <button onClick={() => remove(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default MaintainShops;
