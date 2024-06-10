import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import styles from "../../css/Cart.module.css";
import { ParcelMachine } from "../../models/ParcelMachine";

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState<ParcelMachine[]>([]); //et htmlis näidata.
  const [selectedPM, setSelectedPM] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  //uef -- tehakse päring kohe lehele tulles.
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json") //fetch meetod saadud aadressilt https://jsonplaceholder.typicode.com/
      .then((response) => response.json())
      .then((json) => {
        const filteredMachines = json.filter((pm: ParcelMachine) => pm.A0_NAME === "EE");
        setParcelMachines(filteredMachines);
        setLoading(false);
      });
  }, []);

  const handleSelectPM = (event : React.ChangeEvent<{}>, newValue: any ) => {
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
