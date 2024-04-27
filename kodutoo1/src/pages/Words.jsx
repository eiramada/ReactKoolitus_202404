import React, { useState } from "react";

function Words() {
  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  const [sonad, muudaSonad] = useState(words);

  function tühjenda() {
    muudaSonad([]);
  }

  return (
    <div>
      <div>Kogus: {sonad.length}</div>
      <button onClick={tühjenda}>Tühjenda</button>
      <div>
        {sonad.map((sona) => (
          <div key={sona}>{sona}</div>
        ))}
      </div>
      {sonad.length === 0 && <div> Sõnu pole </div>}
    </div>
  );
}

export default Words;
