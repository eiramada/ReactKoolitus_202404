import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //forms tagi submit teeb lehele by default refreshi
    //e.perventDefault takistab refreshi tegemist

    emailjs
      .sendForm("service_tdfc6us", "template_607qwvd", form.current, {  //form.current annab HTMLi useRefi seest. 
        publicKey: "TpLuPyHpQX3TmxYwg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>  
    {/* ref'i saad kasutada ka ankruna */}
      <br />
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Send" /> <br />
    </form>
  );
  
};
