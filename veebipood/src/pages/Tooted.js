import React, { useState } from "react";

const autod = ["Nobe", "BMW", "Tesla", "Saab", "Opel"];

function Tooted() {
  const [tooted, muudaTooted] = useState(autod);

  function reset() {
    muudaTooted(autod);
  }

  function sortAZ() {
    tooted.sort();
    muudaTooted(tooted.slice());
  }

  function sortZA() {
    tooted.sort((a, b) => b.localeCompare(a));
    muudaTooted(tooted.slice());
  }

  function sortAsc() {
    tooted.sort((a, b) => a.length - b.length);
    muudaTooted(tooted.slice());
  }

  function sortDesc() {
    tooted.sort((a, b) => b.length - a.length);
    muudaTooted(tooted.slice());
  }

  function sort3Täht() {
    tooted.sort((a, b) => a[2].localeCompare(b[2]));
    muudaTooted(tooted.slice());
  }

  return (
    //tähtede arv kasvavalt
    //tähtede arv kahanevealt
    //sorteeri kolmanda tähe järgi tähestiku järjekorras.

    <div>
      <button onClick={reset}>reset</button>
      <button onClick={sortAZ}>sort AZ</button>
      <button onClick={sortZA}>sort ZA</button>
      <button className="button" onClick={sortAsc}>
        <img
          className="buttonImg"
          src="sort_asc.png"
          alt=""
          title="sort ascending"
        />
      </button>

      <button className="button" onClick={sortDesc}>
        <img
          className="buttonImg"
          src="sort_desc.png"
          alt=""
          title="sort descending"
        />
      </button>
      <button onClick={sort3Täht}>3. tähe järgi</button>

      <div>Toodete arv: {tooted.length}</div>
      <div>
        {tooted.map((t) => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default Tooted;
