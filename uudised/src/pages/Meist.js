import React, { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");

  return (
    <div>
      <div>See on meie töötajate leht</div>
      <div>Meie töötajad:</div>
      <br />
      <div>Aavo Pärt</div>
      <div>Uudisklippide taustamuuusika</div>
      <button onClick={() => n2itaKontakt("+321456987")}>Võta ühendust</button>
      <br />
      <br />
      <div>Kerli</div>
      <div>Välisturgude spetsialist</div>
      <button onClick={() => n2itaKontakt("+789456123")}>Võta ühendust</button>
      <br />
      <br />
      <div>Edward</div>
      <div>Kujundaja</div>
      <button onClick={() => n2itaKontakt("+963258741")}>Võta ühendust</button>
      <br />
      <br />
      <div>Kelly</div>
      <div>Reporter</div>
      <button onClick={() => n2itaKontakt("+654789321")}>Võta ühendust</button>
      <br />
      <br />
      {kontakt !== "" && <div>Tema kontakt {kontakt}</div>}
    </div>
  );
}

export default Meist;
