import React from "react";
import { Link } from "react-router-dom";

function Menyy() {
  return (
    <div>
      <Link to="avaleht">
        <img
          className="Pilt"
          src="https://cdn.pistik.net/ekaart/static/kaardid/suur/kevad-03.jpg"
          alt=""
        />
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="Nupp">Kinkekaart</button>
      </Link>

      <Link to="/esindused">
        <button className="Nupp">Esindused</button>
      </Link>
      <Link to="/ärikliendile">
        <button className="Nupp">Ärikliendile</button>
      </Link>
      <Link to="/ostukorv">
        <button className="Nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="Nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="Nupp">Seaded</button>
      </Link>
    </div>
  );
}

export default Menyy;
