import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tooted from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams();
  const toode = tooted[index];
  const nimiRef = useRef();
  const navigate = useNavigate();
  const [sonum, muudaSonum] = useState();

  function muuda() {
    if (nimiRef.current.value === "") {
      muudaSonum("Toote nimetus ei saa olla tühi!");
      return;
    }

    tooted[index] = nimiRef.current.value;
    navigate("/halda-tooted");
  }

  return (
    <div>
      <div>{sonum}</div>
      {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
      <label htmlFor="nimi">Toote nimi </label> <br />
      <input id="nimi" ref={nimiRef} type="text" defaultValue={toode} />
      <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaToode;
