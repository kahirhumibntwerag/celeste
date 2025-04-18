import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

export default function MyCustomCompletePage() {
  const stripe = useStripe();
  const [status, setStatus] = useState("loading"); // "loading" | "succeeded" | "failed"
  const [intentId, setIntentId] = useState(null);

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
    if (!clientSecret || !stripe) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) return;

      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id);
    });
  }, [stripe]);

  return (
    <div>
      {status === "loading" && <p>Checking your payment...</p>}
      {status === "succeeded" && <p>✅ Payment successful!</p>}
      {status === "processing" && <p>🔄 Your payment is processing...</p>}
      {status === "requires_payment_method" && <p>❌ Payment failed. Please try again.</p>}
      {status !== "loading" && (
        <div>
          <p>Payment ID: {intentId}</p>
          <a href="/checkout">Try again</a>
        </div>
      )}
    </div>
  );
}
