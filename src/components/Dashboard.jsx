// src/components/Dashboard.jsx

import React from 'react';
// We need our 'auth' connection and the 'signOut' function from Firebase
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Dashboard() {

  // This function will run when the sign out button is clicked
  const handleSignOut = async () => {
    try {
      // We call the signOut function, passing it our auth connection
      await signOut(auth);
      alert("You have been signed out.");
    } catch (error) {
      console.error("Error signing out:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard!</h1>
      <p className="mt-2 text-gray-600">You are successfully logged in.</p>
      <button
        className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}