import React, { useEffect, useState } from "react";
import config from "../data/config.json";


function HaldaJooke() {
  const [joogidState, uuendaJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => uuendaJoogid(json || []));
  }, [config.joogidDbUrl]);

  const kustuta = (index) => {
    joogidState.splice(index, 1);
    uuendaJoogid(joogidState.slice());

    fetch(config.joogidDbUrl, {
      method: "PUT",
      body: JSON.stringify(joogidState),
    });
  };

  return (
    <div>
      <h2>Halda jooke</h2>
      {joogidState.map((jook, index) => (
        <div key={index}>
          {jook.name} <button onClick={() => kustuta(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default HaldaJooke;
