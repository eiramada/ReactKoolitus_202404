import React from "react";
import { Link } from "react-router-dom";

function Menyy() {
  return (
    <div>
      <div>
        <img
          className="PõhiPilt"
          src="https://the-comics-journal.sfo3.digitaloceanspaces.com/wp-content/uploads/2013/10/art.jpg"
          alt=""
        />
        <p>Siin on minu portfoolio</p>
        <hr className="Triip" />
      </div>
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
    </div>
  );
}

export default Menyy;
