import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Courses from "./pages/Courses";
import Hobbies from "./pages/Hobbies";
import Work from "./pages/Work";

function App() {
  return (
    <div className="App">
      <img
        className="PõhiPilt"
        src="https://the-comics-journal.sfo3.digitaloceanspaces.com/wp-content/uploads/2013/10/art.jpg"
        alt=""
      />
      <p>Siin on minu portfoolio</p>
      <hr className="Triip" />

      <div className="PildiGrupp">
        
        <div className="LinkPilt">
          <Link to="/courses">
            <img src="/CH_faces.jpg" alt="" />
            <p>Courses</p>
          </Link>
        </div>

        <div className="LinkPilt">
          <Link to="/hobbies">
            <img src="/CH_reading.jpg" alt="" />
            <p>Hobbies</p>
          </Link>
        </div>
        
        <div className="LinkPilt">
          <Link to="/work">
            <img src="/CH_treebridge.jpg" alt="" />
            <p>Work</p>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
