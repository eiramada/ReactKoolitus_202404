import { Link, Navigate, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Kinkekaart from "./pages/Kinkekaart";
import Esindused from "./pages/Esindused";
import Ariklient from "./pages/Ariklient";
import Ostukorv from "./pages/Ostukorv";

export function App() {
  return (
    <div className="App">
      <Link to="avaleht">
        <img
          className="Pilt"
          src="https://cdn.pistik.net/ekaart/static/kaardid/suur/kevad-03.jpg"
          alt=""
        />
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="Nupp">Kinkekaart</button>
      </Link>

      <Link to="/esindused">
        <button className="Nupp">Esindused</button>
      </Link>
      <Link to="/ärikliendile">
        <button className="Nupp">ärikliendile</button>
      </Link>
      <Link to="/ostukorv">
        <button className="Nupp">Ostukorv</button>
      </Link>

      {/* path="", mis järgneb localhost:3000-le, ja <div>, millist sisu näidatakse*/}
      <Routes>
        <Route path="" element={<Navigate to="/avaleht" />}></Route>
        <Route path="avaleht" element={<Avaleht />}></Route>
        <Route path="osta-kinkekaart" element={<Kinkekaart />}></Route>
        <Route path="esindused" element={<Esindused />}></Route>
        <Route path="ärikliendile" element={<Ariklient />}></Route>
        <Route path="ostukorv" element={<Ostukorv />}></Route>
      </Routes>
    </div>
  );
}
export default App;