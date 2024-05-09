import React, { useRef, useState } from "react";
import tootedFailist from "../data/tooted.json";
import { Link } from "react-router-dom";

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivsusRef = useRef();

  function kustuta(index) {
    tootedFailist.splice(index, 1);
    muudaTooted(tootedFailist.slice());
  }

  function lisaToode(toode) {
    tootedFailist.push(toode);
    muudaTooted(tootedFailist.slice());
  }

  function lisa() {
    const uusToode = {
      nimi: nimiRef.current.value,
      hind: Number(hindRef.current.value),
      aktiivne: aktiivsusRef.current.checked,
      pilt: piltRef.current.value,
    };

    tootedFailist.push(uusToode);
    muudaTooted(tootedFailist.slice());

    nimiRef.current.value = "";
    hindRef.current.value = "";
    piltRef.current.value = "";
    aktiivsusRef.current.checked = false;
  }

  function kokku() {
    let summa = 0;
    tooted.forEach((t) => (summa = summa + t.hind));
    return summa;
  }
  return (
    <div>
      <label>Nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Staatus</label> <br />
      <input ref={aktiivsusRef} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      <table>
        <thead>
          <tr>
            <th>Pilt</th>
            <th>Nimi</th>
            <th>Hind</th>
            <th>Staatus</th>
            <th>Tegevused </th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((t, index) => (
            <tr key={index} className={t.aktiivne ? "aktiivne" : "mitteaktiivne"}>
              <td>
                <img className="Pilt" src={t.pilt} alt="" />
              </td>
              <td>{t.nimi}</td>
              <td>{t.hind}</td>
              <td>
                {t.aktiivne ? (
                  <span>olemas</span>
                ) : (
                  <span>pole olemas</span>
                )}
              </td>
              <td>
                <button onClick={() => kustuta(index)}>x</button>
                <Link to={"/muuda-toode/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Kokku: </td>
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

export default HaldaTooted;
