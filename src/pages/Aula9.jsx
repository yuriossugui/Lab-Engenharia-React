// src/App.jsx
import React from 'react';
import Toolbar2 from '../components/Toolbar2';
import PopulationCounter from '../components/PopulationCounter';

function Aula9() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Aula 09 - Atividade React</h1>
      <div className="card p-2 mb-2">
        <p>Clique nos botões abaixo para testar as ações:</p>
        <Toolbar2 />
      </div>
      <div className="card p-2 mb-2">
        <PopulationCounter></PopulationCounter>
      </div>
    </div>
  );
}

export default Aula9;