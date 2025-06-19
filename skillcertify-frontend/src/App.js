// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

import Home from "./pages/Home"
import Template from "./pages/Template";
import Issuance from "./pages/Issuance";
import RecipientDashboard from "./pages/RecipientDashboard"; 
import CertificateView from "./pages/CertificateView";
import VerifyPage from "./pages/VerifyPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 ">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/template" element={<Template />} />
          <Route path="/issuance" element={<Issuance />} />
          <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
          <Route path="/verify/:hash" element={<VerifyPage />} />
          <Route path="/view/:id" element={<CertificateView />} />
          {/*
          /* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
