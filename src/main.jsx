import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NotFoundPage from "./features/Pages/NotFoundPage";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Lazy load components
const About = lazy(() => import("./features/Pages/About"));
const ProductPage = lazy(() => import("./features/Pages/Product"));
const Home = lazy(() => import("./features/Pages/Home"));
const Collections = lazy(() => import("./features/Pages/Collections"));
const SignIn = lazy(() => import("./features/Pages/SignIn.jsx"));
const CheckoutForm = lazy(() => import("./features/Stripe/CheckoutForm.jsx"));
const CompletePage = lazy(() => import("./features/Stripe/CompletePage.jsx"));
const Stripe = lazy(() => import("./features/Stripe/Stripe.jsx"));

const queryClient = new QueryClient();

// Loading fallback component
const LoadingSpinner = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "product/:productId",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "collections/:category",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Collections />
          </Suspense>
        ),
      },
      {
        path: "authentication/",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SignIn />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Stripe />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CheckoutForm />
          </Suspense>
        ),
      }
    ],
  },
  {
    path: "/complete",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Stripe />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CompletePage />
          </Suspense>
        ),
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
