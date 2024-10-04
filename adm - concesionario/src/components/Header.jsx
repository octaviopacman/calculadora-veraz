// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h1 className="text-primary mb-0">ADM Concesionario</h1>
        <button className="btn btn-outline-dark">Recibir Presupuesto</button>
      </div>
    </header>
  );
};

export default Header;
