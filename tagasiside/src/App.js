import { NavLink, Route, Routes } from "react-router-dom";

import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <NavLink to="/">
          <button>Avaleht</button>
        </NavLink>
        <NavLink to="/tagasiside">
          <button>Tagasiside</button>
        </NavLink>
        <NavLink to="/tagasisideAndjad">
          <button>TagasisideAndjad</button>
        </NavLink>
      </div>
      <div className="row">
        <div className="col">
          <Routes>
            <Route path="/" element={<div>Tere</div>}></Route>
            <Route path="/tagasiside" element={<Tagasiside />}></Route>
            <Route
              path="/tagasisideAndjad"
              element={<TagasisideAndjad />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
