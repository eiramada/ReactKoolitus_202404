import emailjs from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
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
      <TextField name="from_name" label="Name" variant="standard" /> <br />{" "}
      <br />
      <TextField name="from_email" label="Email" variant="standard" />
      <br /> <br />
      <TextField
        name="message"
        label="Message"
        variant="standard"
        multiline
        rows={4}
      />
      <br /> <br />
      <Button variant="outlined" type="submit">
        Send
      </Button>
    </form>
  );
};
