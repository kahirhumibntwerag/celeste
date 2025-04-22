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
import supabase from "../../scripts/supabaseClient";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("guest");
  const [message, setMessage] = useState('')

  const signUp = async (event) => {
    event.preventDefault()
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    // } catch (error) {
    //   console.error(error);
    //   alert(error.message);
    // }

    let { data, error } = await supabase.auth.signInWithOtp({
      email: email
    })
    
    if(error){
      setMessage(error.message)
      console.log(error.message)
      return
    }
    if(data){
      console.log('signed in successfully')
      console.log(data)

      setEmail('')
      setPassword('')
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
          Sign Up
        </button>
        {/* <button
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
        </button> */}
      </div>
    </>
  );
};

export default Auth;
