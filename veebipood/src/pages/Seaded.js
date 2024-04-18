import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer, toast as toastify } from "react-toastify";

function Seaded() {
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();

  const [aadress, muudaAadress] = useState(localStorage.getItem("aadress") || "Aadressi pole veel sisestatud");
  const [email, muudaEmail] = useState(localStorage.getItem("email") || "Emaili pole sisestatud");
  const [telefon, muudaTelefon] = useState(localStorage.getItem("telefon") || "Telefoni pole sisestatud");

  const lisaAadress = () => {
    if (aadressRef.current.value === "") {
      //toast("Here is your toast.");
      toast.error("Aadress on jäänud sisestamata");
      return;
    }

    if (aadressRef.current.value.length < 5) {
      toast.error("Aadress on liiga lühike!");
      return;
    }

    if (
      aadressRef.current.value.toLowerCase()[0] === aadressRef.current.value[0]
    ) {
      toast.error("Aadress peab algama suure tähega!");
      return;
    }

    muudaAadress(aadressRef.current.value);
    localStorage.setItem("aadress", aadressRef.current.value);
    //toast.success("Success!")
    toastify.success("Aadress sisestatud!");
    aadressRef.current.value = "";

  };

  const lisaEmail = () => {
    if (emailRef.current.value === "") {
      toast.error("Email on jäänud sisestamata");
      return;
    }

    if (emailRef.current.value.length < 5) {
      toast.error("Email on liiga lühike!");
      return;
    }

    if (emailRef.current.value.includes("@") === false) {
      toast.error("Email peab sisaldama @ märki!");
      return;
    }

    muudaEmail(emailRef.current.value);
    localStorage.setItem("email", emailRef.current.value);
    toastify.success("Email sisestatud!");
    emailRef.current.value = "";
  };

  const lisaTelefon = () => {
    if (telefonRef.current.value === "") {
      toast.error("Telefon on jäänud sisestamata");
      return;
    }

    if (telefonRef.current.value.length < 8) {
      toast.error("Telefon on liiga lühike!");
      return;
    }

    if (telefonRef.current.value.startsWith("+372") === false) {
        toast.error("Telefonil peab olema Eesti suunakood");
        return;
      }

    if (isNaN(Number(telefonRef.current.value))) {
      toast.error("Telefoninumber ei saa sisaldada tähti!");
      return;
    }

    muudaTelefon(telefonRef.current.value);
    localStorage.setItem("telefon", telefonRef.current.value);
    toastify.success("Telefon sisestatud");
    telefonRef.current.value = "";

  };

  return (
    <div>
      <label>Aadress</label>
      <input ref={aadressRef} type="text" />
      <button onClick={lisaAadress}>Sisesta</button>
      <br />
      <label>Email</label>
      <input ref={emailRef} type="text" />
      <button onClick={lisaEmail}>Sisesta</button>
      <br />
      <label>Telefon</label>
      <input ref={telefonRef} type="text" />
      <button onClick={lisaTelefon}>Sisesta</button>
      <br />
      <div>Sisestatud aadress: {aadress} </div>
      <div>Sisestatud email: {email} </div>
      <div>Sisestatud telefon: {telefon} </div>

      {/* me ei saa kirjutada: Aadress: {addressRef.current.value}, kuna tol hetkel sel pole väärtust.  */}

      {/* react-hot-toast */}
      <Toaster />
      {/* toastify */}
      <ToastContainer position="bottom-right" autoClose={4000} />
    </div>
  );
}

export default Seaded;
