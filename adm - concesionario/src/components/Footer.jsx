// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-2">&copy; 2024 ADM Concesionario. Todos los derechos reservados.</p>
      <div>
        <a href="#" className="text-white me-2">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="text-white me-2">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" className="text-white">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
