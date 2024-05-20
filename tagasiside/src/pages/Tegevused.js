import React, { useState } from "react";
import tegevusedFailist from "../tegevused.json";

function Tegevused() {
  const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

  const showUserActivities = (userId) => {
    const result = tegevused.filter((tegevus) => tegevus.userId === userId);
    uuendaTegevused(result);
  };

  const showCompletedActivities = () => {
    const result = tegevused.filter((tegevus) => tegevus.completed);
    uuendaTegevused(result);
  };

  const showIncompleteActivities = () => {
    const result = tegevused.filter((tegevus) => !tegevus.completed);
    uuendaTegevused(result);
  };

  const showActivitiesStartingWithT = () => {
    const result = tegevused.filter((tegevus) => tegevus.title.startsWith("t"));
    uuendaTegevused(result);
  };

  const showActivitiesWithMoreThan20Chars = () => {
    const result = tegevused.filter((tegevus) => tegevus.title.length > 20);
    uuendaTegevused(result);
  };

  const showAllActivities = () => {
    uuendaTegevused(tegevusedFailist);
  };


  return (
    <div>
      <div>Koguarv: {tegevused.length}</div>
      <div>
        <button onClick={() => showUserActivities(1)}>Kuva kasutaja 1 tegevused</button>
        <button onClick={() => showUserActivities(2)}>Kuva kasutaja 2 tegevused</button>
        <button onClick={() => showUserActivities(3)}>Kuva kasutaja 3 tegevused</button>
      </div>
      <div>
        <button onClick={showCompletedActivities}>Kuva kõik valmis tegevused</button>
        <button onClick={showIncompleteActivities}>Kuva kõik mittevalmis tegevused</button>
        <button onClick={showActivitiesStartingWithT}>Kuva kõik "t" tähega algavad tegevused</button>
        <button onClick={showActivitiesWithMoreThan20Chars}>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
        <button onClick={showAllActivities}>Kuva kõik tegevused tagasi</button>
      </div>
      <br />
      {tegevused.map((element) => (
        <div key={element.id}>
        <div>UserId: {element.userId}</div>
        <div>Id: {element.id}</div>
        <div>Title: {element.title}</div>
        <div>Completed: {element.completed ? "Yes" : "No"}</div>
        <br />
      </div>
      ))}
    </div>
  );
}

export default Tegevused;
