import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tooted from "../data/tooted.json";
import NotFound from "./NotFound";

function MuudaToode() {
  const { index } = useParams();
  const toode = tooted[index];
  // const toode = tooted.find((t) => t === index);

  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivsusRef = useRef();

  const navigate = useNavigate();
  const [sonum, muudaSonum] = useState();

  function muuda() {
    if (toode === undefined) {
      return <NotFound />;
    }

    if (nimiRef.current.value === "") {
      muudaSonum("Toote nimetus ei saa olla tühi!");
      return;
    }
    const uusToode = {
      nimi: nimiRef.current.value,
      hind: Number(hindRef.current.value),
      aktiivne: aktiivsusRef.current.checked,
      pilt: piltRef.current.value,
    };

    tooted[index] = uusToode;
    navigate("/halda-tooted");
  }

  return (
    <div>
      <div>{sonum}</div>
      {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
      <label htmlFor="nimi">Nimi </label> <br />
      <input id="nimi" ref={nimiRef} type="text" defaultValue={toode.nimi} />
      <br />
      <label htmlFor="hind">Hind </label> <br />
      <input id="hind" ref={hindRef} type="number" defaultValue={toode.hind} />
      <br />
      <label htmlFor="pilt">Pilt </label> <br />
      <input id="pilt" ref={piltRef} type="text" defaultValue={toode.pilt} />
      <br />
      <label htmlFor="aktiivuss">Saadavus </label> <br />
      <input
        id="aktiivuss"
        ref={aktiivsusRef}
        type="checkbox"
        defaultChecked={toode.aktiivne}
      />
      <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaToode;
