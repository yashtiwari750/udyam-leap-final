// src/components/Dashboard.jsx
import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

// Import our new component
import GoalPlanner from './GoalPlanner';

export default function Dashboard() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have been signed out.");
    } catch (error) {
      console.error("Error signing out:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    // We've changed the layout to be a full-width container
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Udyam Leap Dashboard</h1>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>

      {/* We are now displaying the GoalPlanner component here */}
      <GoalPlanner />

    </div>
  );
}