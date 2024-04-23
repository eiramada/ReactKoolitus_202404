import React, { useState } from "react";
import { Link } from "react-router-dom";

function Ostukorv() {
  const joogiNimekiri = ["coca", "fanta", "sprite", "red bull"];

  const [joogid, muudaJooke] = useState(joogiNimekiri);

  function reset() {
    muudaJooke(joogiNimekiri);
  }

  function tühjenda() {
    muudaJooke([]);
  }

  function lisaOstukorvi(j) {
    if (!joogid.includes(j)) {
      muudaJooke((prevJoogid) => [...prevJoogid, j]);
    }
  }

  return (
    <div>
      <Link to="/avaleht">
        <button>Avalehele</button> <br />
      </Link>
      {/* <button onClick={reset}>Reset</button> */}

      <div>
        {joogiNimekiri.map((j) => (
          <button
            disabled={joogid.includes(j)}
            key={j}
            onClick={() => lisaOstukorvi(j)}>
            {j}
          </button>
        ))}
      </div>
      <div>Toodete arv ostukorvis: {joogid.length}</div>

      {joogid.length === 0 ? (
        <div>Ostukorv on tühi</div>
      ) : (
        <button onClick={tühjenda}>Tühjenda ostukorv</button>
      )}
    </div>
  );
}

export default Ostukorv;