import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import töötajad from "../data/tootajad.json";

function MuudaTootaja() {
  const { index } = useParams();
  const tootaja = töötajad[index];
  const nimiRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    töötajad[index] = nimiRef.current.value;
    navigate("/halda-tootajad");
  }

  return (
    <div>
      {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
      <label htmlFor="nimi">Töötaja </label> <br />
      <input id="nimi" ref={nimiRef} type="text" defaultValue={tootaja} />
      <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaTootaja;
