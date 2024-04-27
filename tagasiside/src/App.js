import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Tagasiside from "./pages/Tagasiside";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>

      <Routes>
        <Route path="/" element={<div>Tere</div>}></Route>
        <Route path="/tagasiside" element={<Tagasiside />}></Route>
      </Routes>
    </div>
  );
}

export default App;
