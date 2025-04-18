import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { auth, googleProvider } from "../../config/firebase";

// ✅ Function to create Stripe checkout session and get URL
export const getCheckoutUrl = async (app, priceId) => {
  const authInstance = getAuth(app);
  const userId = authInstance.currentUser?.uid;

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const db = getFirestore(app);
  const checkoutSessionRef = collection(
    db,
    "customers",
    userId,
    "checkout_sessions"
  );

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const error = data?.error;
      const url = data?.url;

      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }

      if (url) {
        console.log("Stripe Checkout URL:", url);
        unsubscribe();
        resolve(url);
      }
    });
  });
};

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("guest");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setCurrentUser(auth.currentUser.displayName);
      console.log("Signed in user:", result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error.code, error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser("guest");
      console.log("User signed out");
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  };

  const handleCheckout = async () => {
    try {
      // Replace this with your actual Stripe price ID
      const priceId = "price_1REdoKGBtqFG3CEbYmntmv99"; // 🔁 Get this from Stripe
      const url = await getCheckoutUrl(auth.app, priceId);
      window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error.message);
      alert("Checkout failed: " + error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-2 bg-white w-[500px] p-4 border-2 border-black/20 rounded-2xl">
        {auth.currentUser && (
          <>
            <p>Welcome {auth.currentUser.displayName || currentUser}</p>
            <button onClick={logOut}>Sign Out</button>
          </>
        )}
        <h2 className="font-bold text-2xl">Log In</h2>
        <input
          className="w-full p-2 border-2 border-gray-200 outline-none focus:border-[#1773b0] rounded-xl"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border-2 border-gray-200 outline-none focus:border-[#1773b0] rounded-xl"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button
          className="bg-[#1773b0] w-full rounded-xl text-white p-2 cursor-pointer"
          onClick={signUp}
        >
          Sign In
        </button>
        <button
          className="bg-green-700 rounded-full w-[30px] h-[30px] text-white cursor-pointer"
          onClick={signInWithGoogle}
        >
          G
        </button>
        <button
          className="bg-red-700 rounded-full text-white cursor-pointer"
          onClick={logOut}
        >
          Log Out
        </button>
        <button
          className="bg-black rounded-full text-white cursor-pointer px-4 py-2 mt-2"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Auth;
