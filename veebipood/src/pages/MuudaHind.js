import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import hinnad from "../data/hinnad.json";

function MuudaHind() {
  const { index } = useParams();
  const hind = hinnad[index];
  const nimiRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    hinnad[index] = Number(nimiRef.current.value);
    navigate("/halda-hinnad");
  }

  return (
    <div>
      {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
      <label htmlFor="nimi">Hind </label> <br />
      <input id="nimi" ref={nimiRef} type="number" defaultValue={hind} />
      <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaHind;
