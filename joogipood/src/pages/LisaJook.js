import React, { useEffect, useRef, useState } from "react";
import config from "../data/config.json";

function LisaJook() {
  const jookRef = useRef();
  const [joogid, setJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => setJoogid(json || []));
  }, [config.joogidDbUrl]);

  function add() {
    const newJook = { name: jookRef.current.value };
    console.log(newJook);
    console.log(config.joogidDbUrl);

    joogid.push(newJook);

    console.log(joogid);

    fetch(config.joogidDbUrl, {
      method: "PUT",
      body: JSON.stringify(joogid),
    });
    setJoogid(joogid.slice());
    jookRef.current.value = "";
  }

  return (
    <div>
      <h2>Lisa uus jook</h2>
      <label>Jook:</label>
      <input ref={jookRef} type="text" />
      <button onClick={add}>Lisa jook</button>
    </div>
  );
}

export default LisaJook;
