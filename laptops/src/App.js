import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import LisaArvuti from "./pages/LisaArvuti";
import VaataArvuteid from "./pages/VaataArvuteid";

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>

      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht />}></Route>
        <Route path="all" element={<VaataArvuteid />}></Route>
        <Route path="add" element={<LisaArvuti />}></Route>
      </Routes>
    </div>
  );
}

export default App;
