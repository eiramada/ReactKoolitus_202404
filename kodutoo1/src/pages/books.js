import React, { useState } from "react";

function Books() {
  const books = [
    "The Great Gatsby",
    "War and Peace",
    "Hamlet",
    "Moby Dick",
    "To Kill a Mockinbird",
    "Harry Potter and the Philosopher's Stone",
    "Three Sisters",
  ];

  const [raamatud, muudaRaamatuid] = useState(books);

  function sortAZ() {
    raamatud.sort();
    muudaRaamatuid(raamatud.slice());
  }

  function sortZA() {
    raamatud.sort((a, b) => b.localeCompare(a));
    muudaRaamatuid(raamatud.slice());
  }

  function sortLength() {
    raamatud.sort((a, b) => a.length - b.length);
    muudaRaamatuid(raamatud.slice());
  }

  function sort2char() {
    raamatud.sort((a, b) => a[1].localeCompare(b[1]));
    muudaRaamatuid(raamatud.slice());
  }

  function sortWordCount() {
    raamatud.sort((a, b) => a.split(" ").length - b.split(" ").length);
    muudaRaamatuid(raamatud.slice());
  }

  function sort2LastChar() {
    raamatud.sort((a, b) => a[a.length - 2].localeCompare(b[b.length - 2]));
    muudaRaamatuid(raamatud.slice());
  }

  function filterThe() {
    const result = raamatud.filter((r) => r.startsWith("The") === true);
    muudaRaamatuid(result);
  }

  function filterAnd() {
    const result = raamatud.filter((r) => r.includes(" and ") === true);
    muudaRaamatuid(result);
  }

  function filterMoreThan10Char() {
    const result = raamatud.filter((r) => r.length > 10);
    muudaRaamatuid(result);
  }

  function filterLessThan7Words() {
    // Jäta alles vähemate tähemärkide sõnad kui 7 -> ei saa aru, mida tahetakse

    // const result = raamatud.filter((r) => r.split(" ").length < 7);
    // muudaRaamatuid(result);
    muudaRaamatuid(["Ei saa aru, mida tahetakse"]);
  }

  function filter3OrMoreWords() {
    const result = raamatud.filter((raamat) => raamat.split(" ").length >= 3);
    muudaRaamatuid(result);
  }

  function filter2charC() {
    const result = raamatud.filter(
      (r) => r[r.length - 2].toLowerCase() === "c"
    );
    muudaRaamatuid(result);
  }

  return (
    <div>
      <br />
      Raamatute nupud
      <button onClick={() => muudaRaamatuid(books)}>Reset</button>
      <div>
        <button onClick={sortAZ}>sort AZ</button>
        <button onClick={sortZA}>sort ZA</button>
        <button onClick={sortLength}>sort length</button>
        <button onClick={sort2char}>sort 2 char</button>
        <button onClick={sortWordCount}>sort word count</button>
        <button onClick={sort2LastChar}>sort 2nd last char</button>
      </div>
      <div>
        <button onClick={filterThe}>filter "The"</button>
        <button onClick={filterAnd}>filter "and"</button>
        <button onClick={filterMoreThan10Char}>filter char &gt; 10 </button>
        <button onClick={filterLessThan7Words}>filter words &lt; 7</button>
        <button onClick={filter3OrMoreWords}>filter words &gt;= 3</button>
        <button onClick={filter2charC}>
          filter where 2nd to last char is 'c'{" "}
        </button>
      </div>
      <div>
        {raamatud.map((raamat) => (
          <div key={raamat}> {raamat} </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
