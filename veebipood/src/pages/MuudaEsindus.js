import React, { useRef } from "react";
import esindused from "../data/keskused.json";
import { useNavigate, useParams } from "react-router-dom";

function MuudaEsindus() {
  const { linn, index } = useParams();
  const esindus = esindused[linn][index];
  const nimiRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    esindused[linn][index] = nimiRef.current.value;
    navigate("/halda-esindused");
  }

  return (
    <div>
      <div>
        {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
        <label htmlFor="nimi">Esindus linnas {linn} </label> <br />
        <input id="nimi" ref={nimiRef} type="text" defaultValue={esindus} />
        <br />
        <button onClick={muuda}>Muuda</button> <br />
      </div>
    </div>
  );
}

export default MuudaEsindus;
