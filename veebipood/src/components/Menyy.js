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
      <Link to="/seaded">
        <button className="Nupp">Seaded</button>
      </Link>
      <Link to="/tooted">
        <button className="Nupp">Tooted</button>
      </Link>
      <Link to="/hinnad">
        <button className="Nupp">Hinnad</button>
      </Link>
      <Link to="/tootajad">
        <button className="Nupp">Töötajad</button>
      </Link>
      <br /> <br />
      <Link to="/lisa-toode">
        <button className="Nupp">Lisa toode</button>
      </Link>
      <Link to="/halda-esindused">
        <button className="Nupp">Halda Esindused</button>
      </Link>
      <Link to="/halda-tooted">
        <button className="Nupp">Halda Tooted</button>
      </Link>
      <Link to="/halda-hinnad">
        <button className="Nupp">Halda Hindu</button>
      </Link>
      <Link to="/halda-tootajad">
        <button className="Nupp">Halda Töötajad</button>
      </Link>
    </div>
  );
}

export default Menyy;
