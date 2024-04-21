import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from './pages/Avaleht.js';
import Kontakt from './pages/Kontakt.js';
import Meist from './pages/Meist.js';
import Uudised from './pages/Uudised.js';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudised</button>
      </Link>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht/>}></Route>
        <Route path="uudised" element={<Uudised/>}></Route>
        <Route path="kontakt" element={<Kontakt/>}></Route>
        <Route path="meist" element={<Meist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
