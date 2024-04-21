import { useState, useRef } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import Leht from "./pages/Leht";

function App() {
  const [sisseLogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonumit] = useState("");

  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  function sisseLogimine() {
    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonumit(kasutajaNimiRef.current.value + ", oled sisselogitud");
    } else {
      muudaSonumit("Vale Parool");
    }
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      {sisseLogitud === "ei" && (
        <button onClick={() => sisseLogimine()}>Logi sisse</button>
      )}
      {sisseLogitud === "jah" && (
        <button onClick={() => muudaSisselogitud("ei")}>Logi Välja</button>
      )}
      <br />
      {sisseLogitud === "ei" && (
        <div>
          <label>Kasutajanimi</label> <br />
          <input ref={kasutajaNimiRef} type="text" /> <br />
          <label>Parool</label> <br />
          <input ref={paroolRef} type="text" />
          <br />
        </div>
      )}
      <br />
      <Link to="/avaleht">
        <button>Avalehele</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/leht">
        <button>leht</button>
      </Link>

      <Routes>
        <Route path="/" element={<Navigate to="/avaleht" />}></Route>
        <Route path="/avaleht" element={<Avaleht />}></Route>
        <Route path="/meist" element={<Meist />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/seaded" element={<Seaded />}></Route>
        <Route path="/leht" element={<Leht />}></Route>
      </Routes>
      <button className="Nupp">Nupp</button>
      <p className="Tekst1">Tekst</p>
      <p className="Tekst2">Text</p>
      <img
        className="Pilt"
        src="https://media.istockphoto.com/id/1195728178/vector/vector-cartoon-character-basenji-dogs-running-step.jpg?s=170667a&w=0&k=20&c=1_WyTSxDx86urDsGlU82074T0tgnpVbe-dNG4C-epdo="
        alt=""
      />
      <h2>HTML Table</h2>
      <table className="Tabel">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/D0MxmDWk4t0?si=Cr83tR6ovZO-2dGa"
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default App;
