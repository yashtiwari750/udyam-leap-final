// src/App.jsx

// STEP 1: Import the tools we need
// useState: to remember the current user's status
// useEffect: to run code once when the app first loads (to hire our guard)
import React, { useState, useEffect } from 'react';

// Import our "security guard" function and our auth connection
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Import our two "rooms": the login page and the dashboard
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

function App() {
  // STEP 2: Create a piece of memory to store the user's status.
  // It starts as 'null', meaning no user is logged in.
  const [user, setUser] = useState(null);

  // STEP 3: Hire the security guard when the app loads.
  // useEffect with an empty array [] at the end runs only ONCE,
  // right after the component first appears on the screen.
  useEffect(() => {
    // We tell onAuthStateChanged to start listening.
    // It returns an 'unsubscribe' function that we can use to fire the guard later if needed.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // This part is the guard's report. Every time the auth state changes
      // (login, logout), this code runs.
      if (currentUser) {
        // If Firebase sends us a 'currentUser' object, it means someone is logged in.
        // We update our memory to store this user's information.
        console.log("User is logged in:", currentUser);
        setUser(currentUser);
      } else {
        // If Firebase sends 'null', it means the user is logged out.
        // We update our memory to reflect that.
        console.log("User is logged out");
        setUser(null);
      }
    });

    // This is a cleanup function. If our App component were to ever be removed
    // from the screen, this would "fire" the guard to prevent memory leaks.
    return () => {
      unsubscribe();
    };
  }, []); // The empty array means "only run this effect once".

  return (
    // The main container that centers everything
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">

      {/* STEP 4: The Conditional Rendering */}
      {/* This is the traffic controller's decision.
          It checks our 'user' memory. If 'user' is NOT null, it shows the Dashboard.
          If 'user' IS null, it shows the Auth form. */}
      {user ? <Dashboard /> : <Auth />}

    </div>
  );
}

export default App;