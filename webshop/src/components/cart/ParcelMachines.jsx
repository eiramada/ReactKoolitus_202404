import { MenuItem, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import styles from "../../css/Cart.module.css";

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]); //et htmlis näidata.
  const [originalParcelMachines, setOriginalParcelMachines] = useState([]); //et htmlis näidata.
  const [selectedPM, setSelectedPM] = useState("");
  const pmSearchRef = useRef();
  const [isLoading, setLoading] = useState(true);

  //uef -- tehakse päring kohe lehele tulles.
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json") //fetch meetod saadud aadressilt https://jsonplaceholder.typicode.com/
      .then((response) => response.json())
      .then((json) => {
        setParcelMachines(json.filter((pm) => pm.A0_NAME === "EE"));
        setOriginalParcelMachines(json.filter((pm) => pm.A0_NAME === "EE"));
        setLoading(false);
      });
  }, []);

  const handleSelectPM = (event) => {
    setSelectedPM(event.target.value);
    pmSearchRef.current.value = "";
    searchFromPMs();
  };

  if (isLoading) {
    return <Spinner />;
  }

  function searchFromPMs() {
    const result = originalParcelMachines.filter((pm) =>
      pm.NAME.toLowerCase().includes(pmSearchRef.current.value.toLowerCase())
    );

    setParcelMachines(result);
  }

  function deleteSelectedPM() {
    setSelectedPM("");
  }

  return (
    <div>
      {selectedPM === "" && (
        <React.Fragment>
          <input onChange={searchFromPMs} ref={pmSearchRef} type="text" />
          <TextField
            id="standard-select-pm"
            select
            label="Select"
            variant="standard"
            className={styles.muiTextfieldSelect}
            value={selectedPM}
            onChange={handleSelectPM}
            style={{ minWidth: "200px" }}
          >
            {parcelMachines.map((pm) => (
              <MenuItem value={pm.NAME} key={pm.NAME}>
                {pm.NAME}
              </MenuItem>
            ))}
          </TextField>
          <br />
        </React.Fragment>
      )}
      {selectedPM !== "" && (
        <div>
          {selectedPM}
          <button onClick={deleteSelectedPM}>X</button>
        </div>
      )}
    </div>
  );
}

export default ParcelMachines;
