import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht.js";
import HaldaUudised from "./pages/HaldaUudised.js";
import Kontakt from "./pages/Kontakt.js";
import LisaUudis from "./pages/LisaUudis.js";
import Meist from "./pages/Meist.js";
import Uudised from "./pages/Uudised.js";
import YksUudis from "./pages/YksUudis.js";
import MuudaUudis from "./pages/MuudaUudis.js";

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudised</button>
      </Link>
      <Link to="/lisa-uudis">
        <button>Lisa Uudis</button>
      </Link>
      <Link to="/uudis/:index">
        <button>Uudis</button>
      </Link>
      <Link to="/muuda-uudis/:index">
        <button>Muuda Uudist</button>
      </Link>
      <Link to="/halda-uudiseid">
        <button>Halda uudiseid</button>
      </Link>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht />}></Route>
        <Route path="uudised" element={<Uudised />}></Route>
        <Route path="kontakt" element={<Kontakt />}></Route>
        <Route path="meist" element={<Meist />}></Route>
        <Route path="lisa-uudis" element={<LisaUudis />}></Route>
        <Route path="halda-uudiseid" element={<HaldaUudised />}></Route>
        <Route path="uudis/:index" element={<YksUudis />}></Route>
        <Route path="muuda-uudis/:index" element={<MuudaUudis />}></Route>
      </Routes>
    </div>
  );
}

export default App;
