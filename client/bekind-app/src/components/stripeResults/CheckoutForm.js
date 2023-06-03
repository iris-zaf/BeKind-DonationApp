import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
// import Cards from "react-credit-cards";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
function CheckoutForm(props) {
  const navigate = useNavigate();
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
      //setMessage(error.message);
      return navigate("/error");
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsProcessing(false);
  };

  return (
    <>
      <MDBRow>
        <MDBCol>
          <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_4b8xfsqj.json"
            background="transparent"
            speed="1"
            style={{ width: "378px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </MDBCol>

        <MDBCol>
          <form id="PaymentForm" onSubmit={handleSubmit}>
            <h5
              style={{
                marginBottom: "2em",
                marginTop: "2em",
                fontWeight: "600",
              }}
            >
              Add your payment details
            </h5>

            <PaymentElement id="payment-element" />

            <button disabled={isProcessing || !stripe || !elements} id="submit">
              <span id="button-text">
                {isProcessing
                  ? "Processing ..."
                  : ` Pay  ${new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "EUR",
                    }).format(props.amount)}`}
              </span>
            </button>
            {message && <div id="payment-message">{message}</div>}
          </form>
        </MDBCol>
      </MDBRow>
    </>
  );
}
export default CheckoutForm;
