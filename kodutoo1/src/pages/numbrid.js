import React, { useState } from "react";

function Numbrid() {
  const numbrid = [4, 23, 7, 39, 19, 0, 9, 14, 135, 505, 92];

  const [numbriArray, muudaNumbreid] = useState(numbrid);

  function sortAsc() {
    numbriArray.sort((a, b) => a - b);
    muudaNumbreid(numbriArray.slice());
  }

  function sortDesc() {
    numbriArray.sort((a, b) => b - a);
    muudaNumbreid(numbriArray.slice());
  }

  function sortAZ() {
    numbriArray.sort();
    muudaNumbreid(numbriArray.slice());
  }

  function sortZA() {
    numbriArray.sort((a, b) => b.toString().localeCompare(a));
    muudaNumbreid(numbriArray.slice());
  }

  function filterGreaterThan8() {
    const result = numbriArray.filter((hind) => hind > 8);
    muudaNumbreid(result);
  }

  function filterLessThan10() {
    const result = numbriArray.filter((hind) => hind < 10);
    muudaNumbreid(result);
  }

  function filterEvenNumbers() {
    const result = numbriArray.filter((hind) => hind % 2 === 0);
    muudaNumbreid(result);
  }

  function filterNotEvenNumbers() {
    const result = numbriArray.filter((hind) => hind % 2 !== 0);
    muudaNumbreid(result);
  }

  function filterStartWith1() {
    // const result = numbriArray.filter((hind) => {
    //     const firstDigit = parseInt(hind.toString()[0]); // Get the first digit of the number
    //     return firstDigit === 1; // Filter numbers that start with 1

    // const result = numbriArray.filter((hind) => hind.toString().startsWith("1") === true);

    const result = numbriArray.filter((h) => h.toString()[0] === "1");
    muudaNumbreid(result);
  }

  function filterContains3() {
    const result = numbriArray.filter((h) => h.toString().includes("3"));
    muudaNumbreid(result);
  }

  return (
    <div>
      <br />
      Numbrinupud
      <button onClick={() => muudaNumbreid(numbrid)}>reset</button>
      <div>
        <button onClick={sortAsc}>Sort Asc</button>
        <button onClick={sortDesc}>Sort Desc</button>
        <button onClick={sortAZ}>Sort AZ</button>
        <button onClick={sortZA}>Sort ZA</button>
      </div>
      <div>
        <button onClick={filterGreaterThan8}>Filter &gt; 8</button>
        <button onClick={filterLessThan10}>Filter &lt; 10</button>
        <button onClick={filterEvenNumbers}>Filter %2 === 0</button>
        <button onClick={filterNotEvenNumbers}>Filter %2 !== 0</button>
        <button onClick={filterStartWith1}>Filter starts with '1'</button>
        <button onClick={filterContains3}>Filter contains '3'</button>
      </div>
      <div>
        {numbriArray.map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
    </div>
  );
}

export default Numbrid;
