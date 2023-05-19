import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import "./checkout.css";

function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    //below making sure to disable form submission before stripe.js has loaded
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsProcessing(false);
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <h5 style={{ marginBottom: "5em", fontWeight: "bold" }}>
          Add your payment details
        </h5>
        <PaymentElement id="payment-element" />

        <button disabled={isProcessing || !stripe || !elements} id="submit">
          <span id="button-text">
            {isProcessing
              ? "Processing ..."
              : ` Pay now ${new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "EUR",
                }).format(props.amount)}`}
          </span>
          <div> </div>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
}
export default CheckoutForm;
