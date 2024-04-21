import React, { useState } from "react";

function Muutmine() {
  const [hind, uuendaHind] = useState(39);

  return (
    <div>
      <span
        className={hind === 39 ? "pakett-aktiivne" : "pakett"}
        onClick={() => uuendaHind(39)}>
        Family
      </span>
      <span
        className={hind === 17 ? "pakett-aktiivne" : "pakett"}
        onClick={() => uuendaHind(17)}>
        Standard
      </span>
      <span
        className={hind === 7 ? "pakett-aktiivne" : "pakett"}
        onClick={() => uuendaHind(7)}>
        Mini
      </span>
      <div>Kuumakse: 0€</div>
      <div>Tavahind: {hind}</div>
    </div>
  );
}

export default Muutmine;
