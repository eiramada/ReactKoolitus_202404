import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import töötajad from "../data/tootajad.json";

function MuudaTootaja() {
  const { index } = useParams();
  const tootaja = töötajad.find(t=> t.nimi === index);
  const nimiRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const occupationRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    const uusTöötaja = {
      nimi: nimiRef.current.value,
      age: Number(ageRef.current.value),
      city: cityRef.current.value,
      occupation: occupationRef.current.value,
    };

    töötajad[index] = uusTöötaja;
    navigate("/halda-tootajad");
  }

  return (
    <div>
      {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
      <label htmlFor="nimi">Töötaja </label> <br />
      <input id="nimi" ref={nimiRef} type="text" defaultValue={tootaja.nimi} />
      <br />
      <label htmlFor="aeg">Vanus </label> <br />
      <input id="aeg" ref={ageRef} type="number" defaultValue={tootaja.age} />
      <br />
      <label htmlFor="city">Linn </label> <br />
      <input
        id="city"
        ref={cityRef}
        type="text"
        defaultValue={tootaja.city}
      />
      <br />
      <label htmlFor="occupation">Amet</label> <br />
      <input
        id="occupation"
        ref={occupationRef}
        type="text"
        defaultValue={tootaja.occupation}
      />
      <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaTootaja;
