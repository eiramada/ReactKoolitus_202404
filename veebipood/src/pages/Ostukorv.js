import React from "react";
import { Link } from "react-router-dom";

function Ostukorv() {
  return (
    <div>
      Ostukorv on tühi
      <Link to="/avaleht">
        <button>Avalehele</button>
      </Link>
    </div>
  );
}

export default Ostukorv;
