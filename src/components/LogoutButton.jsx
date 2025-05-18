// src/components/LogoutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogoutButton.css";

function LogoutButton() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
  );
}

export default LogoutButton;