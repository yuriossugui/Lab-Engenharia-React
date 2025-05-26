import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
// import Atividade10 from '../pages/Atividade10';
import Semana4 from '../pages/Semana4';
import Aula11 from '../pages/Aula11';
import Aula10 from '../pages/Aula10';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/semana4" element={<Semana4 />} />
      <Route path="/aula11" element={<Aula11 />} />
      <Route path="/aula10" element={<Aula10 />} />
    </Routes>
  );
}

export default AppRoutes;
