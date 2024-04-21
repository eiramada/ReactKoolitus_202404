import React, { useState } from "react";

function Kontakt() {
  const [aadress, määraAadress] = useState("Tallinn");
  const [telefon, määraTelefon] = useState("5512345");
  const [email, määraEmail] = useState("bla@baa.com");

  const [ingliskeelne, muudaIngliskeelseks] = useState("ei");

  function määra() {
    määraAadress("London");
    määraEmail("dum@dum.ee");
    määraTelefon("123456789");
    muudaIngliskeelseks("jah");
  }

  return (
    <div>
      <div>{aadress}</div>
      <div>{telefon}</div>
      <div>{email}</div>
      <button onClick={määra}>Muuda ingliskeelseks</button>
      {ingliskeelne === "jah" && <div>See leht on ingliskeelne</div>}
    </div>
  );
}

export default Kontakt;
