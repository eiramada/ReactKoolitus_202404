import React, { useState } from "react";
import joogid from "../data/joogid.json";

function HaldaJooke() {
  const [joogidState, uuendaJoogid] = useState(joogid);

  const kustuta = (index) => {
    joogidState.splice(index, 1);
    uuendaJoogid(joogidState.slice());
  };

  return (
    <div>
      <h2>Halda jooke</h2>
      {joogidState.map((jook, index) => (
        <div key={index}>
          {jook} <button onClick={() => kustuta(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default HaldaJooke;
