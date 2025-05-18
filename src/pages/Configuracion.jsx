// src/pages/Configuracion.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/Configuracion.css";

function Configuracion() {
  // Ejemplo de datos de usuarios para listar
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Nicolás Reyna", rol: "Super Admin", email: "nico@reynanovillo.es" },
    { id: 2, nombre: "Carla Admin", rol: "Administrativo", email: "carla@admin.com" },
    { id: 3, nombre: "Juan Perez", rol: "Propietario", email: "juan@propietario.com" }
  ]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: "", email: "", rol: "Propietario" });

  // Maneja el formulario de nuevo usuario (simulado)
  const handleInput = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };
  const agregarUsuario = (e) => {
    e.preventDefault();
    setUsuarios([
      ...usuarios,
      { ...nuevoUsuario, id: usuarios.length + 1 }
    ]);
    setNuevoUsuario({ nombre: "", email: "", rol: "Propietario" });
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <h1>Configuración de Usuarios y Permisos</h1>
          <section className="seccion-nuevo-usuario">
            <h2>Agregar Usuario</h2>
            <form onSubmit={agregarUsuario} className="form-nuevo-usuario">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={nuevoUsuario.nombre}
                onChange={handleInput}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={nuevoUsuario.email}
                onChange={handleInput}
                required
              />
              <select name="rol" value={nuevoUsuario.rol} onChange={handleInput}>
                <option value="Super Admin">Super Admin</option>
                <option value="Administrativo">Administrativo</option>
                <option value="Propietario">Propietario</option>
                <option value="Inquilino">Inquilino</option>
              </select>
              <button type="submit">Agregar Usuario</button>
            </form>
          </section>
          <section className="seccion-lista-usuarios">
            <h2>Usuarios Registrados</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Configuracion;
