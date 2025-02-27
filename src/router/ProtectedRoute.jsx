// ProtectedRoute.jsx
import React, { useState, useEffect } from "react";
import Login from "../Components/Login/Login"; // adjust the import path as needed

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (!token) {
      setShowLogin(true);
    }
  }, [token]);

  // If token exists, render the protected content.
  if (token) {
    return children;
  }

  // Otherwise, render the login popup.
  return <Login isVisible={showLogin} onClose={() => setShowLogin(false)} />;
};

export default ProtectedRoute;
