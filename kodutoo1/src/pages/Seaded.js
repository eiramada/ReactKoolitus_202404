import React, { useState } from "react";

function Seaded() {
  const [kujundus, muudaKujundust] = useState(
    localStorage.getItem("veebilehe_kujundus")
  );

  function muudaTumedaks() {
    localStorage.setItem("veebilehe_kujundus", "dark_mode");
    muudaKujundust("dark_mode");
  }

  function muudaHeledaks() {
    localStorage.setItem("veebilehe_kujundus", "light_mode");
    muudaKujundust("light_mode");
  }

  return (
    <div>
      <button onClick={muudaTumedaks}>TumeVeeb</button>
      <button onClick={muudaHeledaks}>HeleVeeb</button>

      {kujundus === "dark_mode" && <div>TUME LEHT</div>}
      {kujundus === "light_mode" && <div>HELE LEHT</div>}
    </div>
  );
}

export default Seaded;
