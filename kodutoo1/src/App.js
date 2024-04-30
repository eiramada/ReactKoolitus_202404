import { useRef, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Books from "./pages/books";
import Kontakt from "./pages/Kontakt";
import Leht from "./pages/Leht";
import Logimine from "./pages/Logimine";
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import Words from "./pages/Words";
import Animals from "./pages/animals";
import Months from "./pages/months";
import Numbrid from "./pages/numbrid";

function App() {
  const [sisseLogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonumit] = useState("");

  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  function sisseLogimine() {
    if (paroolRef.current.value.length < 8) {
      toast.error("Parool peab olema pikem kui 8 tähemärki");
      return;
    }

    if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
      toast.error("Paroolil peab olema mõni suur täht");
      return;
    }

    if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
      toast.error("Paroolil peab olema mõni väike täht");
      return;
    }

    if (paroolRef.current.value.includes("%") === false) {
      toast.error("Parool peab sisaldama sümbolit '%'");
      return;
    }

    // if (paroolRef.current.value !== "123") {
    //   toast.error("Vale Parool");
    //   toast.error("sonum");
    //   return;
    // }

    muudaSisselogitud("jah");
    muudaSonumit(kasutajaNimiRef.current.value + ", oled sisselogitud");
    toast.success("sõnum");
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
      <Link to="/logimine">
        <button>Logimine</button>
      </Link>
      <Link to="/months">
        <button>Months</button>
      </Link>
      <Link to="/animals">
        <button>Animals</button>
      </Link>
      <Link to="/words">
        <button>Words</button>
      </Link>
      <Link to="/books">
        <button>Books</button>
      </Link>

      <Link to="/numbrid">
        <button>Numbrid</button>
      </Link>
      
      <Routes>
        <Route path="/" element={<Navigate to="/avaleht" />}></Route>
        <Route path="/avaleht" element={<Avaleht />}></Route>
        <Route path="/meist" element={<Meist />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/seaded" element={<Seaded />}></Route>
        <Route path="/leht" element={<Leht />}></Route>
        <Route path="/logimine" element={<Logimine />}></Route>
        <Route path="/months" element={<Months />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/numbrid" element={<Numbrid />}></Route>
      </Routes>
      <br />
      <p>------------- Varasem kodutöö: -------------</p>   
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
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/D0MxmDWk4t0?si=Cr83tR6ovZO-2dGa"
        title="YouTube video player"
      ></iframe>
      <ToastContainer position="bottom-right" autoClose={4000} />
    </div>
  );
}

export default App;
