// src/App.jsx
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Simulator from './components/Simulator';
import Footer from './components/Footer';

function App() {
  const simuladorRef = useRef(null);

  const handleScrollToSimulador = () => {
    simuladorRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <HeroSection onScroll={handleScrollToSimulador} />
      <AboutUs />
      <h1 className="text-center my-5">CALCULA TU CREDITO</h1>
      <Simulator simuladorRef={simuladorRef} />
      <Footer />
    </div>
  );
}

export default App;
