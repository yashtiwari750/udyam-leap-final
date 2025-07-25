// src/components/Auth.jsx - FINAL COMPLETE VERSION
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("IT WORKED! Welcome! Your account has been created.");
      console.log("Sign up successful!", userCredential);
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error("Error signing up:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome back! You have successfully signed in.");
      console.log("Sign in successful!", userCredential);
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error("Error signing in:", error);
    }
  };

  // This is the full, correct JSX for the form
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Join Udyam Leap</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="password" type="password" placeholder="At least 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSignIn}>Sign In</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}