import React, { useRef, useState } from "react";
import tootedFailist from "../data/tooted.json";
import { Link } from "react-router-dom";

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const tooteRef = useRef();

  function kustuta(index) {
    tootedFailist.splice(index, 1);
    muudaTooted(tootedFailist.slice());
  }

  function lisaToode(toode) {
    tootedFailist.push(toode);
    muudaTooted(tootedFailist.slice());
  }

  function lisa() {
    tootedFailist.push(tooteRef.current.value);
    muudaTooted(tootedFailist.slice());
  }
  return (
    <div>
      <label>Toote Nimi</label> <br />
      <input ref={tooteRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      {tooted.map((t, index) => (
        <div key={index}>
          {t}
          <button onClick={() => kustuta(index)}>x</button>
          <button onClick={() => lisaToode(t)}>Lisa lõppu</button>
          <Link to={"/muuda-toode/" + index}>
            <button>Muuda</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HaldaTooted;
