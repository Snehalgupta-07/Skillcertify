import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // make sure this is correctly configured

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginAndFetch = async () => {
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      // Step 1: Firebase login
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();
      console.log("Token: ",token);
      localStorage.setItem('token', token);

      // Step 2: Call backend to get SkillCertify user info
      const res = await fetch("http://localhost:5000/api/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setUserData(data);
      } else {
        setError(data.error || "Backend error");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Login failed. Check email/password or network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-100 antialiased flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl shadow-xl p-8 md:p-10 text-center border border-gray-700">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          SkillCertify Login
        </h1>

        <p className="text-gray-300 mb-6 text-lg">Access your digital credential hub.</p>

        <input
          className="w-full mb-4 p-3 border border-gray-700 bg-gray-800 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300 placeholder-gray-500"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-3 border border-gray-700 bg-gray-800 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300 placeholder-gray-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginAndFetch}
          disabled={loading}
          className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Logging in...' : 'Login & Get User'}
        </button>

        {userData && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-700 to-emerald-800 text-white rounded-lg shadow-md border border-green-600 text-left">
            <p className="text-lg font-semibold mb-2">Login Successful!</p>
            <p><strong>ID:</strong> <span className="font-mono">{userData.id}</span></p>
            <p><strong>Email:</strong> <span className="font-mono">{userData.email}</span></p>
            <p><strong>Role:</strong> <span className="font-mono text-yellow-300">{userData.role}</span></p>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-gradient-to-r from-red-700 to-rose-800 text-white rounded-lg shadow-md border border-red-600 text-left">
            <p className="text-lg font-semibold mb-2">Login Error:</p>
            <p>{error}</p>
          </div>
        )}

        <p className="mt-8 text-gray-500 text-sm">
          Don't have an account? <a href="/signup" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
