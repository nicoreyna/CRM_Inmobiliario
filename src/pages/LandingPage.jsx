import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src="/assets/Logo_front.png" alt="Logo Reyna Novillo" className="logo-img" />
        <Link to="/login" className="login-button">Iniciar Sesión</Link>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>¿Buscas gestión inmobiliaria en España o Argentina?</h1>
          <div className="country-buttons">
            <a href="https://reynanovillo.es" target="_blank" rel="noopener noreferrer" className="country-btn">
              <span role="img" aria-label="España">🇪🇸</span> España - Málaga
            </a>
            <a href="https://compreprop.com.ar" target="_blank" rel="noopener noreferrer" className="country-btn">
              <span role="img" aria-label="Argentina">🇦🇷</span> Argentina - Córdoba
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-box">
          <h2>¿Tenés alguna consulta?</h2>
          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <textarea placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <footer className="landing-footer">
        © 2025 Reyna Novillo • info@reynanovillo.es • +34 645 435 117 / +54 351 520 3465
      </footer>
    </div>
  );
}

export default LandingPage;