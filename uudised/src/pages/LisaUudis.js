import React, { useRef } from "react";

function LisaUudis() {
  const uudiseRef = useRef();

  function lisaUusUudis() {
    let uudised = localStorage.getItem("uudised");
    uudised = JSON.parse(uudised) || [];
    uudised.push(uudiseRef.current.value);
    uudised = JSON.stringify(uudised);
    localStorage.setItem("uudised", uudised);
    uudiseRef.current.value = "";
  }

  return (
    <div>
      <label htmlFor="uudis">Uudise nimi</label>
      <input id="uudis" type="text" ref={uudiseRef} />
      <button onClick={lisaUusUudis}>Lisa</button>
    </div>
  );
}

export default LisaUudis;
