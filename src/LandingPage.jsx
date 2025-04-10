
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="logo">Reyna Novillo</div>
        <Link to="/login" className="login-button">Iniciar Sesión</Link>
      </header>

      <HeroSection />

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
        © 2025 Reyna Novillo · contacto@reynanovillo.com · +34 600 000 000 / +54 351 000 0000
      </footer>
    </div>
  );
}

export default LandingPage;
