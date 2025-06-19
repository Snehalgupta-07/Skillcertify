import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; //  your configured firebase auth

//  LOGIN COMPONENT
const LoginComponent = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();
      localStorage.setItem('token', token);

      const res = await fetch("http://localhost:5000/api/users/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) {
        onLoginSuccess(data);
      } else {
        setError(data.error || "Backend error");
      }

    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 p-8 flex flex-col items-center bg-gray-850 rounded-2xl">
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Welcome Back!
      </h2>
      <p className="text-gray-300 mb-6 text-md">Login to your SkillCertify account.</p>

      <input
        className="w-full mb-4 p-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full mb-6 p-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}

      <p className="mt-8 text-gray-500 text-sm">
        Don't have an account?{" "}
        <button onClick={onSwitchToSignup} className="text-blue-400 hover:underline font-semibold">
          Sign Up
        </button>
      </p>
    </div>
  );
};

//  SIGNUP COMPONENT
const SignupComponent = ({ onSwitchToLogin, onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('RECIPIENT'); // ISSUER / RECIPIENT only
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();
      localStorage.setItem('token', token);

      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ email, role }),
      });

      const data = await res.json();
      if (res.ok) {
        onSignupSuccess(data);
      } else {
        setError(data.error || "Backend error during registration");
      }

    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 p-8 flex flex-col items-center bg-gray-850 rounded-2xl">
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
        Join SkillCertify!
      </h2>
      <p className="text-gray-300 mb-6 text-md">Create your account to get started.</p>

      <input
        className="w-full mb-4 p-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full mb-4 p-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-lg"
      >
        <option value="RECIPIENT">Recipient</option>
        <option value="ISSUER">Issuer</option>
      </select>
      <input
        className="w-full mb-4 p-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400"
        type="password"
        placeholder="Password (min 6 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="w-full mb-6 p-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button
        onClick={handleSignup}
        disabled={loading}
        className={`w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>

      {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}

      <p className="mt-8 text-gray-500 text-sm">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="text-blue-400 hover:underline font-semibold">
          Login
        </button>
      </p>
    </div>
  );
};

// ✅ INTEGRATED AUTH APP
const AuthApp = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  const handleSignupSuccess = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 font-inter antialiased flex flex-col md:flex-row">
      {/* LEFT BANNER */}
      <div className="relative w-full md:w-1/2 min-h-64 md:min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-b md:border-b-0 md:border-r border-gray-700">
        <div className="relative z-10 text-center text-white p-6 rounded-xl bg-opacity-30 backdrop-blur-sm shadow-xl">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">SkillCertify</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Securely issue and verify digital certificates.
          </p>
          <svg className="w-28 h-28 text-teal-400 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 14.88a.75.75 0 001.06 0l4-4a.75.75 0 00-1.06-1.06L12 15.44l-2.72-2.72a.75.75 0 00-1.06 1.06l3.25 3.25z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* RIGHT SLIDING FORMS */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        <div className="relative w-full max-w-md min-h-[550px] bg-gray-850 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className={`absolute inset-0 transition-transform duration-700 ${isLoginMode ? 'translate-x-0' : '-translate-x-full'} `}>
            <LoginComponent onSwitchToSignup={() => setIsLoginMode(false)} onLoginSuccess={handleLoginSuccess} />
          </div>
          <div className={`absolute inset-0 transition-transform duration-700 ${!isLoginMode ? 'translate-x-0' : 'translate-x-full'} `}>
            <SignupComponent onSwitchToLogin={() => setIsLoginMode(true)} onSignupSuccess={handleSignupSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthApp;
