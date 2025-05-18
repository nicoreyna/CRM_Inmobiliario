import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/dashboard/inicio" className="sidebar-link">
          <span className="sidebar-icon">🏠</span>
          <span className="sidebar-label">Inicio</span>
        </NavLink>
        <NavLink to="/dashboard/propiedades" className="sidebar-link">
          <span className="sidebar-icon">🏢</span>
          <span className="sidebar-label">Propiedades</span>
        </NavLink>
        <NavLink to="/dashboard/propietarios" className="sidebar-link">
          <span className="sidebar-icon">🧑‍💼</span>
          <span className="sidebar-label">Propietarios</span>
        </NavLink>
        <NavLink to="/dashboard/inquilinos" className="sidebar-link">
          <span className="sidebar-icon">📄</span>
          <span className="sidebar-label">Inquilinos</span>
        </NavLink>
        <NavLink to="/dashboard/contratos" className="sidebar-link">
          <span className="sidebar-icon">📑</span>
          <span className="sidebar-label">Contratos</span>
        </NavLink>
        <NavLink to="/dashboard/pagos" className="sidebar-link">
          <span className="sidebar-icon">💰</span>
          <span className="sidebar-label">Pagos</span>
        </NavLink>
        <NavLink to="/dashboard/incidencias" className="sidebar-link">
          <span className="sidebar-icon">⚠️</span>
          <span className="sidebar-label">Incidencias</span>
        </NavLink>
        <NavLink to="/dashboard/configuracion" className="sidebar-link">
          <span className="sidebar-icon">⚙️</span>
          <span className="sidebar-label">Configuración</span>
        </NavLink>
      </nav>
      <NavLink to="/logout" className="sidebar-link sidebar-logout">
        <span className="sidebar-icon">🚪</span>
        <span className="sidebar-label">Cerrar Sesión</span>
      </NavLink>
    </aside>
  );
}

export default Sidebar;