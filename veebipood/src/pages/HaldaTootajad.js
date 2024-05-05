import React, { useRef, useState } from "react";
import töötajad from "../data/tootajad.json";
import { Link } from "react-router-dom";

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(töötajad);
  const tootajaRef = useRef();

  const kustuta = (index) => {
    töötajad.splice(index, 1);
    muudaTootajad(tootajad.slice());
  };

  const lisaUusTootaja = (töötaja) => {
    töötajad.push(tootajaRef.current.value);
    muudaTootajad(tootajad.slice());
  };

  const lisa = (tootaja) => {
    töötajad.push(tootaja);
    muudaTootajad(tootajad.slice());
  };

  return (
    <div>
      <div>
        <label>Uus Töötaja</label> <br />
        <input ref={tootajaRef} type="text" /> <br />
        <button onClick={lisaUusTootaja}>Lisa</button>
        <br />
      </div>
      <div>Mitu töötajat: {töötajad.length} </div>
      <div>
        {töötajad.map((töötaja, index) => (
          <div key={index}>
            {töötaja}
            <button onClick={() => kustuta(index)}>x</button>
            <button onClick={() => lisa(töötaja)}>lisa lõppu</button>
            <Link to={"/muuda-tootaja/" + index}>
              <button>Muuda</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default HaldaTootajad;
