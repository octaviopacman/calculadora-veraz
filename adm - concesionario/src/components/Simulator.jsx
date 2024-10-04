// src/components/Simulator.jsx
import React, { useState } from 'react';

const Simulator = ({ simuladorRef }) => {
  const [dni, setDni] = useState('');
  const [verazStatus, setVerazStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDniChange = (e) => {
    setDni(e.target.value);
  };

  const checkVeraz = () => {
    if (!dni || dni.length < 7) {
      alert('Por favor, ingrese un DNI válido.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const randomResult = Math.random() < 0.5 ? 'Aprobado' : 'Rechazado';
      setVerazStatus(randomResult);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="simulador-section container my-5" ref={simuladorRef}>
      <div className="mb-3">
        <label htmlFor="dni" className="form-label">DNI:</label>
        <input
          type="text"
          id="dni"
          value={dni}
          onChange={handleDniChange}
          className="form-control"
        />
      </div>
      <button
        onClick={checkVeraz}
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Calcular Veraz'}
      </button>

      {verazStatus && (
        <div className={`mt-4 alert ${verazStatus === 'Aprobado' ? 'alert-success' : 'alert-danger'}`}>
          Estado de Veraz: {verazStatus}
        </div>
      )}
    </section>
  );
};

export default Simulator;
