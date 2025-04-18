import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Outlet } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51REb31GBtqFG3CEbckmgu4UFp3Zbuxb3ToUsCMgBEgCYVhsfiVb1mnv5mnGJKGOPEH9izVtiWKcaiHEo45JNfJuW00LATLd78Q"
);

const Stripe = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://api-zpedpbaheq-uc.a.run.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 100 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = { theme: "stripe" };
  const loader = "auto";

  if (!clientSecret) return <div>Loading payment...</div>;

  return (
    <div className="w-[500px] mx-auto">
      <Elements
        options={{ clientSecret, appearance, loader }}
        stripe={stripePromise}
      >
        <Outlet />
      </Elements>
    </div>
  );
};

export default Stripe;
