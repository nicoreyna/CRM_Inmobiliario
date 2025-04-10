
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Propiedades en España y Argentina</h1>
        <p>Explorá nuestras propiedades exclusivas en Málaga y Córdoba</p>
        <div className="hero-buttons">
          <a href="https://www.reynanovillo.es" target="_blank" rel="noopener noreferrer" className="btn-spain">
            Ir a España
          </a>
          <a href="https://www.compreprop.com.ar" target="_blank" rel="noopener noreferrer" className="btn-argentina">
            Ir a Argentina
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
