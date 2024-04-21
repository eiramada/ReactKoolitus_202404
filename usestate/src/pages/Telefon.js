import React, { useState } from "react";

function Telefon() {
  const [varv, uuendaVarv] = useState("Vali värv!");
  const colors = ["must", "kuldne", "sinine", "punane", "lilla"];

  let color =   varv.charAt(0).toUpperCase() + varv.slice(1);

  return (
    <div>
      <br />
      {varv === "Vali värv!" ? (
        <div>Telefoni värv on valimata!</div>
      ) : (
        <div>
          Telefoni värvus: {color}
        </div>
      )}

      {/* <button onClick={() => uuendaVarv("must")}>Must</button>
      <button onClick={() => uuendaVarv("kuldne")}>Kuldne</button>
      <button onClick={() => uuendaVarv("sinine")}>Sinine</button>
      <button onClick={() => uuendaVarv("punane")}>Punane</button>
      <button onClick={() => uuendaVarv("lilla")}>Lilla</button> */}

      {colors.map((varv) => (
        <button key={varv} onClick={() => uuendaVarv(varv)}>
          {varv.charAt(0).toUpperCase() + varv.slice(1)}
        </button>
      ))}

      {/* {varv === "must" && <div className="must-ring"></div>}
      {varv === "kuldne" && <div className="kuldne-ring"></div>}
      {varv === "sinine" && <div className="sinine-ring"></div>}
      {varv === "punane" && <div className="punane-ring"></div>}
      {varv === "lilla" && <div className="lilla-ring"></div>} */}

      <div className={`ring ${varv}-ring`}></div>
    </div>
  );
}

export default Telefon;
