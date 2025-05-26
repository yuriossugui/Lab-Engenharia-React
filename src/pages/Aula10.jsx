// src/Aula10.js
import React from 'react';

import Gallery from '../components/Gallery';
import PersonCard from '../components/PersonCard';
import FilteredList from '../components/FilteredList';

function Aula10() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Aula 10 - Atividade React</h1>

      <hr />

      <section>
        <h2>1. Galeria de Perfil</h2>
        <Gallery />
      </section>

      <hr />

      <section>
        <h2>2. Cartão de Pessoa</h2>
        <PersonCard />
      </section>

      <hr />

      <section>
        <h2>3. Lista Filtrável</h2>
        <FilteredList />
      </section>
    </div>
  );
}

export default Aula10;