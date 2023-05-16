import { useEffect, useState } from "react";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/config").then(async (r) => {
      const { publishableKey } = await r.json();
      //   console.log(publishableKey);
      setStripePromise(publishableKey);
    });
  }, []);

  //second useEffect to create the payment intent
  useEffect(() => {
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      console.log("clientSecret", clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);
  // console.log("clientSecret", clientSecret);
  // console.log("stripePromise", stripePromise);
  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={loadStripe(stripePromise)} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
