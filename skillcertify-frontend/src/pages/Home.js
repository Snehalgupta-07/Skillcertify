import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getIdToken } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MissionSection from '../components/MissionSection';
import CoreFunctionalities from '../components/CoreFunctionalities';
import EFooter from '../components/EnhancedFooter';
import Main from '../components/Main';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Get Firebase ID token
          const token = await firebaseUser.getIdToken();

          // Fetch user data from backend
          const res = await fetch('http://localhost:5000/api/users/me', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await res.json();
          if (res.ok) {
            setUser(data);
          } else {
            console.error('Failed to fetch user:', data.error);
            setUser(null);
          }
        } catch (err) {
          console.error('Error during auth fetch:', err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading user data...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Please log in to access the dashboard.
      </div>
    );
  }

  const isIssuer = user.role === 'ISSUER';
  const isRecipient = user.role === 'RECIPIENT';

  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-100 antialiased">
     {/* Navbar Component */}
      <Navbar user={user} isIssuer={isIssuer} isRecipient={isRecipient} />

      {/* Main Content Area */}
      <Main user={user} isIssuer={isIssuer} isRecipient={isRecipient} />
     
        {/* Mission Section */}
        <MissionSection />  

        {/* Core Functionalities Section */}
        <CoreFunctionalities />

         {/* Enhanced Footer Section */}
        <EFooter  />
         </div>
  )}
export default App;
