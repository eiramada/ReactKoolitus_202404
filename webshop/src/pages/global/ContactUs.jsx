import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submit action

    emailjs
      .sendForm("service_tdfc6us", "template_607qwvd", form.current, {
        publicKey: "TpLuPyHpQX3TmxYwg",
      })
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setMessage("Email successfully sent!");
        },
        (error) => {
          console.log("Failed to send the email:", error.text);
          setMessage("Failed to send the email");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Send" />
    </form>
  );
};
