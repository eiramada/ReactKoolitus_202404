import React, { useState } from "react";

function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);

  return (
    <div>
      <div>See on kontaktide leht</div>
      <div>Võta ühendust</div>
      <br />
      
      <div className={n2itaTelKristiine ? "valitud" : undefined}>
        <div onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>
          Kristiine keskus
        </div>
        {n2itaTelKristiine && <div>+321654987</div>}
        <div>Endla 45</div>
      </div>
      <br />

      <div className={n2itaTelYlemiste ? "valitud" : undefined}>
        <div onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>
          Ülemiste keskus
        </div>
        {n2itaTelYlemiste && <div className="valitud">+3258741963</div>}
        <div>Suur-Sõjamäe 6</div>
      </div>
      <br />

      <div className={n2itaTelTasku ? "valitud" : undefined}>
        <div onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>
          Tasku keskus
        </div>
        {n2itaTelTasku && <div className="valitud">+369852147</div>}
        <div>Tutu 2</div>
      </div>
    </div>
  );
}

export default Kontakt;
