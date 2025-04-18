import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./features/Pages/About";
import NotFoundPage from "./features/Pages/NotFoundPage";
import ProductPage from "./features/Pages/Product";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/Pages/Home";
import Collections from "./features/Pages/Collections";
import SignIn from "./features/Pages/SignIn.jsx";
import CheckoutForm from "./features/Stripe/CheckoutForm.jsx";
import CompletePage from "./features/Stripe/CompletePage.jsx";
import Stripe from "./features/Stripe/Stripe.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App acts as layout
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "collections/:category",
        element: <Collections />,
      },
      {
        path: "authentication/",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/checkout",
    element: <Stripe />, // App acts as layout
    children: [{ path: "", element: <CheckoutForm /> }],
  },
  {
    path: "/complete",
    element: <Stripe />, // App acts as layout
    children: [{ path: "", element: <CompletePage /> }],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
