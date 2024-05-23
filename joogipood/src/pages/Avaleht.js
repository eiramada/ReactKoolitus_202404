import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../data/config.json";


function Avaleht() {
  const [joogid, uuendaJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => uuendaJoogid(json || []));
  }, [config.joogidDbUrl]);
  
  return (
    <div>
      <h1>Joogipood</h1>

      {joogid.map((jook, index) => (
        <div key={index}>
          {jook.name}
          <Link to={"jook/" + index }>
          
            <button>Detailid</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
