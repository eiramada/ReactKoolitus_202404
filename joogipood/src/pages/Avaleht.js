import React from "react";
import { Link } from "react-router-dom";
import joogid from "../data/joogid.json";

function Avaleht() {
  return (
    <div>
      <h1>Joogipood</h1>

      {joogid.map((jook, index) => (
        <div key={index}>
          {jook}
          <Link to={"jook/" + index }>
          
            <button>Detailid</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
