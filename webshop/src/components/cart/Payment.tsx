import { Button } from "@mui/material";

function Payment(props: { amount: string }) {
  function pay() {
    //enne maksmist paneme andmebaasi, muuhulgas saame nii ID (order reference)

    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentBody = {
      account_name: "EUR3D1",
      nonce: "32twet" + new Date() + Math.random() * 99999999, //iga kord tuleb muuta
      timestamp: new Date(),
      amount: props.amount,
      order_reference: Math.random() * 99999999,
      customer_url: "https://err.ee",
      api_username: "92ddcfab96e34a5f",
    };
    const paymentHeaders = {
      Authorization:
        "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json",
    }; //auth

    fetch(url, {
      method: "POST",
      body: JSON.stringify(paymentBody),
      headers: paymentHeaders,
    }) //GET on default.
      .then((response) => response.json())
      .then((json) => (window.location.href = json.payment_link));
  }
  // Kui HTMLs vahetame URLi: <Link to="">
  // Kui Reacti JavaScriptis vahetame URLi const navigate = useNavigate()    navigate("")
  // Kui tahame URLile liikuda mis on väljaspool meie rakendust     window.location.href = "http://err.ee"

  return (
    <div>
      <Button variant="contained" onClick={pay}>
        Pay
      </Button>
    </div>
  );
}

export default Payment;
