//rfce snippet lõi selle.
//ffc on vanem versioon, millega tuleb natukene veel käsitööd.

import React from "react";
import Yldist from "../components/Yldist";
import GarantiiAeg from "../components/GarantiiAeg";
import GarantiiTeostamine from "../components/GarantiiTeostamine";
import GarantiiEiKuulu from "../components/GarantiiEiKuulu";
import Tarbija from "../components/Tarbija";
import Defekt from "../components/Defekt";

function Ariklient() {
  return (
    <div>
      GARANTII TINGIMUSED: <br />
      <br />
      <Yldist></Yldist>
      <GarantiiAeg></GarantiiAeg>
      <GarantiiTeostamine></GarantiiTeostamine>
      <GarantiiEiKuulu></GarantiiEiKuulu>
      <Tarbija></Tarbija>
      <Defekt></Defekt>
      <br />
      NB! Arvutitark OÜ ei kohustu tagasi ostma või ümber vahetama töökorras
      tooteid, mille klient on ostnud kauplusest kohapealt. Konkreetse toote
      tagastamise või vahetamise võimaluse ja tingimused otsustab
      garantiiosakond.
      <br />
      Juhul kui garantiiremonti toodud seadmel ei leita valmistamisprotsessist
      või kasutatud materjalidest põhjustatud viga, võidakse töö tellijalt nõuda
      remonditellimuse käsitlustasu kuni €36.-. Esimese kuue kuu jooksul
      tarbijale tasu ei rakendata. <br />
    </div>
  );
}

export default Ariklient;
