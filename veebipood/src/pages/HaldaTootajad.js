import React, { useRef, useState } from "react";
import töötajad from "../data/tootajad.json";
import { Link } from "react-router-dom";

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(töötajad);
  const nimiRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const occupationRef = useRef();

  const kustuta = (index) => {
    töötajad.splice(index, 1);
    muudaTootajad(tootajad.slice());
  };

  function lisa() {
    const uusTöötaja = {
      nimi: nimiRef.current.value,
      age: Number(ageRef.current.value),
      city: cityRef.current.value,
      occupation: occupationRef.current.value,
    };

    töötajad.push(uusTöötaja);
    muudaTootajad(töötajad.slice());

    nimiRef.current.value = "";
    ageRef.current.value = "";
    cityRef.current.value = "";
    occupationRef.current.value = "";
  }

  function kokku() {
    let summa = 0;
    tootajad.forEach((t) => (summa = summa + t.age));
    return summa;
  }

  return (
    <div>
      <div>
        <div>Uus Töötaja</div> <br />
        <label>Nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <label>Vanus</label> <br />
        <input ref={ageRef} type="number" /> <br />
        <label>Linn</label> <br />
        <input ref={cityRef} type="text" /> <br />
        <label>Amet</label> <br />
        <input ref={occupationRef} type="text" /> <br />
        <button onClick={lisa}>Lisa</button> <br />
        <br />
      </div>
      <div>Mitu töötajat: {töötajad.length} </div>

      <table>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Vanus</th>
            <th>Linn</th>
            <th>Amet</th>
            <th>Tegevused</th>
          </tr>
        </thead>
        <tbody>
          {töötajad.map((töötaja, index) => (
            <tr key={index}>
              <td>{töötaja.nimi}</td>
              <td>{töötaja.age}</td>
              <td>{töötaja.city}</td>
              <td>{töötaja.occupation}</td>
              <td>
                <button onClick={() => kustuta(index)}>x</button>
                <Link to={"/muuda-tootaja/" + töötaja.nimi}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Vanused kokku: </td>
            <td>{kokku()}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default HaldaTootajad;
