// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="nosotros-section container my-5">
      <h2 className="text-center mb-4">Nosotros</h2>
      <p className="text-center mb-4">
        En ADM Concesionario, nos dedicamos a ofrecer las mejores opciones de financiamiento para que puedas adquirir el vehículo de tus sueños. Nuestro equipo de asesores está aquí para ayudarte en cada paso del proceso.
      </p>
      <h3 className="mb-3">Nuestro Equipo de Asesores</h3>
      <div className="row">
        {/* Puedes repetir este bloque para cada asesor */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="col-12 col-md-4 mb-4">
            <div className="card">
              <img src={`/path/to/asesor${i}.jpg`} className="card-img-top img-fluid" alt={`Asesor ${i}`} />
              <div className="card-body">
                <h5 className="card-title">Asesor {i}</h5>
                <p className="card-text">Descripción del asesor {i}.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
