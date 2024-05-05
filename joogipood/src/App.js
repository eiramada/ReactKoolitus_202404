import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import joogid from "./data/joogid.json";
import Avaleht from "./pages/Avaleht";
import HaldaJooke from "./pages/HaldaJooke";
import Jook from "./pages/Jook";
import LisaJook from "./pages/LisaJook";

function App() {
  const [joogidstate, setJoogid] = useState(joogid);
  return (
    <>
      <div className="App">
        <Link to="/">
          <button>Avaleht</button>
        </Link>
        <Link to="/lisa">
          <button>Lisa jook</button>
        </Link>
        <Link to="/halda">
          <button>Halda jooke</button>
        </Link>
        <Link to="jook"></Link>
      </div>
      <div className="row">
        <div className="col">
          <Routes>
            <Route path="/" element={<Avaleht />}></Route>
            <Route path="/lisa" element={<LisaJook />}></Route>
            <Route path="/halda" element={<HaldaJooke />}></Route>
            <Route path="/jook/:number" element={<Jook />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
