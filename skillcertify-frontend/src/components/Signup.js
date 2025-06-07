import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("RECIPIENT");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      // Step 1: Firebase Auth Signup
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();

      // Step 2: Call backend to assign role
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }), // Send role
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Account created with role: " + data.role);
        setError("");
      } else {
        setError(data.error || "Failed to register user");
      }
    } catch (err) {
      console.error(err);
      setError("Signup failed: " + err.message);
      setMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Create a SkillCertify Account</h1>

      <input
        className="w-full mb-3 p-2 border rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select
        className="w-full mb-3 p-2 border rounded"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="RECIPIENT">Recipient</option>
        <option value="ISSUER">Issuer</option>
      </select>

      <button
        onClick={handleSignup}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Sign Up
      </button>

      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
