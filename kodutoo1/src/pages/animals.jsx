import React, { useState } from "react";

function Animals() {
  const animals = ["pigs", "goats", "sheep"];
  const [loomad, muudaLoomi] = useState(animals);

  function tühjenda() {
    muudaLoomi([]);
  }

  return (
    <div>
      <div>Kogus: {loomad.length}</div>
      <button onClick={tühjenda}>Tühjenda</button>
      <div>
        {loomad.map((loom) => (
          <div key={loom}>{loom}</div>
        ))}
      </div>
      {loomad.length === 0 && <div>Loomi pole </div>}
    </div>
  );
}

export default Animals;
