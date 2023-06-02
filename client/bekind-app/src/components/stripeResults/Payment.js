import { useEffect, useState } from "react";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  console.log("props", props);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_SERVER_ADDRESS}/config`).then(
      async (r) => {
        const { publishableKey } = await r.json();
        //   console.log(publishableKey);
        setStripePromise(publishableKey);
      }
    );
  }, []);

  //second useEffect to create the payment intent

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_SERVER_ADDRESS}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: props.amount * 100 }),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      // console.log("clientSecret", clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  // console.log("clientSecret", clientSecret);
  // console.log("stripePromise", stripePromise);
  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={loadStripe(stripePromise)} options={{ clientSecret }}>
          <CheckoutForm amount={props.amount} />
        </Elements>
      )}
    </>
  );
}

export default Payment;
