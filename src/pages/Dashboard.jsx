// src/pages/Dashboard.jsx
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <h1>Bienvenido al Panel de Gestión</h1>
          <p>Selecciona una opción del menú para comenzar.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;