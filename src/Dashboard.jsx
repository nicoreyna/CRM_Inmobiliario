
import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="user-info">
          <img src="/assets/usuario.png" alt="Usuario" className="user-img" />
          <span className="user-name">Hola, Nicolás</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/propiedades">Propiedades</Link></li>
            <li><Link to="/propietarios">Propietarios</Link></li>
            <li><Link to="/inquilinos">Inquilinos</Link></li>
            <li><Link to="/contratos">Contratos</Link></li>
            <li><Link to="/pagos">Pagos</Link></li>
            <li><Link to="/incidencias">Incidencias</Link></li>
          </ul>
        </nav>
        <div className="logout-area">
          <LogoutButton />
        </div>
        <div className="logo-bottom">
          <img src="/assets/logo_transparente.png" alt="Logo CRM" />
        </div>
      </aside>

      <main className="main-content">
        <div className="main-header">
          <h1>Escritorio</h1>
          <Link to="/formulario-propiedad" className="btn-agregar">+ Agregar Propiedad</Link>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3>📍 Incidencias</h3>
            <ul>
              <li><span className="rojo">❄ Caldera rota - Calle Falsa 123</span></li>
              <li><span className="amarillo">⚠ Pintura humedad - Av. Mitre 456</span></li>
              <li><span className="verde">✅ Cerradura floja - Sarmiento 789</span></li>
            </ul>
          </div>
          <div className="card">
            <h3>📝 Tareas</h3>
            <ul>
              <li>☐ Enviar resumen a propietario</li>
              <li>☐ Actualizar contrato vencido</li>
            </ul>
          </div>
          <div className="card">
            <h3>📅 Contratos a Vencer</h3>
            <ul>
              <li>🏠 Gómez - Av. Rivadavia 123 (vence: 10/05/2024)</li>
              <li>🏠 Pérez - Las Heras 456 (vence: 22/06/2024)</li>
            </ul>
          </div>
          <div className="card">
            <h3>📈 Contratos a Actualizar</h3>
            <ul>
              <li>📊 IPC - Inquilino Díaz - 01/04/2024</li>
              <li>📊 ICL - Inquilino López - 15/05/2024</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
