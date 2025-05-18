// src/pages/CrearUsuario.jsx
import React, { useState } from "react";
import "../styles/CrearUsuario.css";

function CrearUsuario() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("usuario");

  const handleSubmit = () => {
    alert(`Usuario creado: ${username} - Rol: ${role}`);
  };

  return (
    <div className="create-user-container">
      <h2>Crear Usuario</h2>
      <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="superadmin">Super Admin</option>
        <option value="administrativo">Administrativo</option>
        <option value="usuario">Usuario</option>
      </select>
      <button onClick={handleSubmit}>Crear Usuario</button>
    </div>
  );
}

export default CrearUsuario;