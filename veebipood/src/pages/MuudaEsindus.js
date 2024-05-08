import React, { useRef } from "react";
import esindused from "../data/keskused.json";
import { useNavigate, useParams } from "react-router-dom";

function MuudaEsindus() {
  const { linn, index } = useParams();
  const esindus = esindused[linn][index];
  const nimiRef = useRef();
  const telefonRef = useRef();
  const addressRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    const updatedEsindus = {
      name: nimiRef.current.value,
      phone: telefonRef.current.value,
      address: addressRef.current.value,
    };

    esindused[linn][index] = updatedEsindus;
    navigate("/halda-esindused");
  }

  return (
    <div>
      <div>
        <br />
        {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
        <label htmlFor="nimi">Esindus linnas {linn} </label> <br />
        <input
          id="nimi"
          ref={nimiRef}
          type="text"
          defaultValue={esindus.name}
        />
        <br />
        <label htmlFor="telefon">Telefon </label> <br />
        <input
          id="telefon"
          ref={telefonRef}
          type="text"
          defaultValue={esindus.phone}
        />
        <br />
        <label htmlFor="aadress">Aadress </label> <br />
        <input
          id="aadress"
          ref={addressRef}
          type="text"
          defaultValue={esindus.address}
        />
        <br />
        <br />
        <button onClick={muuda}>Muuda</button> <br />
      </div>
    </div>
  );
}

export default MuudaEsindus;
