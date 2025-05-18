// src/components/HeroSection.jsx
import React from "react";
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bienvenidos a Reyna Novillo</h1>
        <p>Gestiona tus propiedades de forma eficiente</p>
        <div className="hero-buttons">
          <a href="https://www.reynanovillo.es">España - Málaga</a>
          <a href="https://www.compreprop.com.ar">Argentina - Córdoba</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;