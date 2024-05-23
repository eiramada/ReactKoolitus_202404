import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../data/config.json";

function Jook() {
  const { number } = useParams();

  const [joogidState, uuendaJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then((res) => res.json())
      .then((json) => uuendaJoogid(json || []));
  }, [config.joogidDbUrl]);

  const jook = joogidState[number];

  if (!jook) {
    return <div>Jook not found</div>;
  }

  return (
    <div>
      <h1>{jook.name}</h1>
    </div>
  );
}

export default Jook;
