import React, { useRef, useState } from "react";

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");
  const nimiRef = useRef(null);

  function lisaUusTegelane() {
    if (nimiRef.current.value === "") {
      uuendaSonum("Tühja nimega ei saa sisestada");
      return;
    }
    uuendaSonum(`Tegelane ${nimiRef.current.value} lisatud`);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Tegelase nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={() => lisaUusTegelane()}>Lisa uus</button>
      <br />
    </div>
  );
}

export default LisaTegelane;
