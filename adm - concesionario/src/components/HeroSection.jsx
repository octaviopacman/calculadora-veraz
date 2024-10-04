// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ onScroll }) => {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videohero/hero.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <h2>Simula tu Crédito hoy mismo</h2>
        <p>Planes y Cuotas a tu medida</p>
        <button className="btn btn-outline-light mt-3" onClick={onScroll}>
          Simular mi Crédito
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
