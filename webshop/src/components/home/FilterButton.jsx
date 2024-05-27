import { Button } from "@mui/material";
import React from "react";

function FilterButton({ cat, dbProducts, setProducts }) {
  function filterByCategory(categoryClicked) {
    // setProducts(dbProducts); //-> polegi õige. setid tehakse alles siis, kui funktsioon läbi saab. :( isegi siis, kui set on mõne teise meetodi sees, nt reseti sees
    const result = dbProducts.filter(
      (p) => p.category.toLowerCase() === categoryClicked
    );
    setProducts(result);
  }

  return (
    <Button key={cat} onClick={() => filterByCategory(cat)}>
      {cat}
    </Button>
  );
}

export default FilterButton;
