import { NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Avaleht from "./pages/Avaleht";
import HaldaJooke from "./pages/HaldaJooke";
import LisaJook from "./pages/LisaJook";

import "./App.css";

function App() {
  const [joogid, setJoogid] = useState([
    "Põltsamaa",
    "Aura",
    "Kadarbik",
    "Saku",
    "Värska",
  ]);
  return (
    <>
      <div className="App">
        <NavLink to="/">
          <button>Avaleht</button>
        </NavLink>
        <NavLink to="/lisa">
          <button>Lisa jook</button>
        </NavLink>
        <NavLink to="/halda">
          <button>Halda jooke</button>
        </NavLink>
      </div>
      <div className="row">
        <div className="col">
          <Routes>
            <Route
              path="/"
              element={<Avaleht setJoogid={setJoogid} joogid={joogid} />}
            ></Route>
            <Route
              path="/lisa"
              element={<LisaJook setJoogid={setJoogid} joogid={joogid} />}
            ></Route>
            <Route
              path="/halda"
              element={<HaldaJooke setJoogid={setJoogid} joogid={joogid} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
