import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";
import Tegevused from "./pages/Tegevused";

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
        <NavLink to="/tegevused">
          <button>tegevused</button>
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
            <Route path="/tegevused" element={<Tegevused />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
