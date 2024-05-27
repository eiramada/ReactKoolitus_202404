import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import styles from "../../css/Cart.module.css";

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]); //et htmlis näidata.
  const [selectedPM, setSelectedPM] = useState(null);
  const [isLoading, setLoading] = useState(true);

  //uef -- tehakse päring kohe lehele tulles.
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json") //fetch meetod saadud aadressilt https://jsonplaceholder.typicode.com/
      .then((response) => response.json())
      .then((json) => {
        const filteredMachines = json.filter((pm) => pm.A0_NAME === "EE");
        setParcelMachines(filteredMachines);
        setLoading(false);
      });
  }, []);

  const handleSelectPM = (event, newValue) => {
    setSelectedPM(newValue.NAME);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {selectedPM === null && (
        <React.Fragment>
          <Autocomplete
            id="parcel-machine-search"
            options={parcelMachines}
            getOptionLabel={(option) => option.NAME}
            style={{ minWidth: 200 }}
            value={selectedPM}
            onChange={handleSelectPM}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select a parcel machine"
                variant="standard"
                className={styles.muiTextfieldSelect}
              />
            )}
          />
        </React.Fragment>
      )}
      {selectedPM !== "" && (
        <div>
          {selectedPM}
          <button onClick={() => setSelectedPM(null)}>X</button>
        </div>
      )}
    </div>
  );
}

export default ParcelMachines;
