import React from "react";
import { Link } from "react-router-dom";

function Ostukorv() {
//Coca, fanta, sprite, red bull

//koguarv
//tühjendamise nupp
//kui ostukorv on tühi, siis näitab teksti "ostukorv on tühi", muidu ei näita.

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
