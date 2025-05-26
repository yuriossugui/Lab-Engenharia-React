import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Atividade10 from '../pages/Atividade10';
import Semana4 from '../pages/Semana4';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/atividade10" element={<Atividade10 />} />
      <Route path="/semana4" element={<Semana4 />} />
    </Routes>
  );
}

export default AppRoutes;
