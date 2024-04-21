import React, { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [kursus, uuendaKursus] = useState("Valimata");

  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <button
        className={kursus === "Udemy" ? "Kursus-Aktiivne" : "Kursus"}
        onClick={() => uuendaKursus("Udemy")}
      >
        Udemy
      </button>
      <button
        className={kursus === "Coursera" ? "Kursus-Aktiivne" : "Kursus"}
        onClick={() => uuendaKursus("Coursera")}
      >
        Coursera
      </button>
      <button
        onClick={() => uuendaKursus("Codecadamy")}
      >
        Codecadamy
      </button>
      <button
        className={kursus === "Udacity" ? "Kursus-Aktiivne" : "Kursus"}
        onClick={() => uuendaKursus("Udacity")}
      >
        Udacity
      </button>

      {kursus === "Udemy" && (
        <div>siin on kirjeldus (loend) Udemy.com läbitud kursustest </div>
      )}
      {kursus === "Coursera" && (
        <div>siin on kirjeldus (loend) Coursera.org läbitud kursustest </div>
      )}
      {kursus === "Codecadamy" && (
        <div>siin on kirjeldus (loend) codeacademy.com läbitud kursustest </div>
      )}
      {kursus === "Udacity" && (
        <div>siin on kirjeldus (loend) Udacity.com läbitud kursustest </div>
      )}
    </div>
  );
}

export default Courses;
