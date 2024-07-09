import React, { useRef, useState } from "react";

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");
  const eesnimiRef = useRef();
  const perenimiRef = useRef();
  const asukohtRef = useRef();
  const vanusRef = useRef();
  const [tegelased, setTegelased] = useState(
    JSON.parse(localStorage.getItem("tegelased")) || []
  );

  function lisaUusTegelane() {
    if (eesnimiRef.current.value === "") {
      uuendaSonum("Tühja nimega ei saa sisestada");
      return;
    }

    const tegelane = {
      firstName: eesnimiRef.current.value,
      lastName: perenimiRef.current.value,
      location: asukohtRef.current.value,
      age: Number(vanusRef.current.value),
    };

    const updatedTegelased = [...tegelased, tegelane];
    localStorage.setItem("tegelased", JSON.stringify(updatedTegelased));
    setTegelased(updatedTegelased);

    uuendaSonum(`Tegelane ${eesnimiRef.current.value} lisatud`);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Tegelase nimi</label> <br />
      <input ref={eesnimiRef} type="text" /> <br />
      <input ref={perenimiRef} type="text" /> <br />
      <label>Asukoht</label> <br />
      <input ref={asukohtRef} type="text" /> <br />
      <label>Vanus</label> <br />
      <input ref={vanusRef} type="number" /> <br />
      <button onClick={lisaUusTegelane}>Lisa uus</button>
      <br />
    </div>
  );
}

export default LisaTegelane;
