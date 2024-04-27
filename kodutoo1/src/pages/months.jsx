import React, { useState } from "react";

function Months() {
  const OgKuud = ["March", "Jan", "Feb", "Dec"];
  const [kuud, muudaKuud] = useState(OgKuud);

  function tühjenda() {
    muudaKuud([]);
  }

  return (
    <div>
      <div>Kogus: {kuud.length}</div>
      <button onClick={tühjenda}>Tühjenda</button>
      <div>
        {kuud.map((kuu) => (
          <div key={kuu}>{kuu}</div>
        ))}
      </div>
      {kuud.length === 0 && <div>Kuid pole </div>}
    </div>
  );
}

export default Months;
