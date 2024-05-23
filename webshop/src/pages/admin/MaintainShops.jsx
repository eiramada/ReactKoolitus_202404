import React, { useEffect, useRef, useState } from "react";
function MaintainShops() {
  const [shops, setShops] = useState([]);
  const nameRef = useRef();
  const latRef = useRef();
  const longRef = useRef();
  const openTimeRef = useRef();

  const url = process.env.REACT_APP_SHOPS_DB_URL;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setShops(json || []));
  }, [url]);

  function add() {
    const newshop = {
      name: nameRef.current.value,
      lat: parseFloat(latRef.current.value),
      long: parseFloat(longRef.current.value),
      openTime: openTimeRef.current.value,
    };
    shops.push(newshop);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shops),
    });
    setShops(shops.slice());
    //toast?
    nameRef.current.value = "";
    latRef.current.value = "";
    longRef.current.value = "";
    openTimeRef.current.value = "";
  }

  function remove(index) {
    shops.splice(index, 1);
    setShops(shops.slice());

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shops),
    });
  }

  return (
    <div>
      <label>Shop Name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Lat</label> <br />
      <input ref={latRef} type="number" /> <br />
      <label>Long</label> <br />
      <input ref={longRef} type="number" /> <br />
      <label>Open Time</label> <br />
      <input ref={openTimeRef} type="text" placeholder="HH:MM-HH:MM" /> <br />
      <button onClick={add}>Add</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Open Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shops?.map((shop, index) => (
            <tr key={shop.name}>
              <td>{shop.name}</td>
              <td>{shop.lat}</td>
              <td>{shop.long}</td>
              <td>{shop.openTime}</td>
              <td>
                <button onClick={() => remove(index)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintainShops;
