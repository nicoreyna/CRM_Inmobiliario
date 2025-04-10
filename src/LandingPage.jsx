
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
      <div className="logo">
        <img src="/assets/Logo_front.png" alt="Logo Reyna Novillo" className="logo-img" />
      </div>
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
        © 2025 Reyna Novillo · info@reynanovillo.es · +34 645 435 117 / +54 351 520 3465
      </footer>
    </div>
  );
}

export default LandingPage;
