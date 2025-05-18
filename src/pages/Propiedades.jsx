// src/pages/Propiedades.jsx
import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/dataService";

function Propiedades() {
  const [propiedades, setPropiedades] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        setPropiedades(data.propiedades);
      } catch (err) {
        setError(err.message);
      }
    };
    loadData();
  }, []);

  const filteredProps = propiedades.filter((prop) =>
    prop.direccion.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>⚠️ Error al cargar las propiedades.</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Propiedades</h2>
      <input
        type="text"
        placeholder="Buscar por dirección"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dirección</th>
            <th>Barrio</th>
            <th>CP</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredProps.length > 0 ? (
            filteredProps.map((prop) => (
              <tr key={prop.id}>
                <td>{prop.id}</td>
                <td>{prop.direccion}</td>
                <td>{prop.barrio}</td>
                <td>{prop.cp}</td>
                <td>{prop.precio} €</td>
                <td>{prop.estado}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No se encontraron propiedades.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Propiedades;