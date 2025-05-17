import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Atividade10 from '../pages/Atividade10';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/atividade10" element={<Atividade10 />} />
    </Routes>
  );
}

export default AppRoutes;
