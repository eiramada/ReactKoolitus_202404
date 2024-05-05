import React, { useRef, useState } from "react";
import esindused from "../data/keskused.json";
import { Link } from "react-router-dom";

function HaldaEsindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(esindused[linn]);
  const keskusRef = useRef();
  const linnad = Object.keys(esindused);

  const kustutaKeskus = (index) => {
    keskused.splice(index, 1);
    setKeskused(keskused.slice());
  };

  const lisaUusKeskus = () => {
    keskused.push(keskusRef.current.value);
    setKeskused(keskused.slice());
  };

  const lisaKeskusLõppu = (keskus) => {
    keskused.push(keskus);
    setKeskused(keskused.slice());
  };

  const changeCity = (newCity) => {
    setLinn(newCity);
    setKeskused(esindused[newCity]);
  };

  return (
    <div>
      <button>Tühjenda - mis see tähendab?</button>

      <div>
        <div>
          <label>Uus Keskus</label>
          <br />
          <input ref={keskusRef} type="text" />
          <br />
          <button onClick={lisaUusKeskus}>Lisa</button>
        </div>
        <div>Aktiivne linn: {linn}</div>
        {linnad.map((city) => (
          <button
            key={city}
            className={linn === city ? "linn-aktiivne" : "linn"}
            onClick={() => changeCity(city)}
          >
            {city}
          </button>
        ))}
        <div>
          {keskused.map((keskus, index) => (
            <div key={index}>
              {keskus}
              <button onClick={() => kustutaKeskus(index)}>x</button>
              <button onClick={() => lisaKeskusLõppu(keskus)}>
                lisa lõppu
              </button>
              <Link to={"/muuda-esindus/" + linn + "/" + index}>
                <button>Muuda</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HaldaEsindused;
