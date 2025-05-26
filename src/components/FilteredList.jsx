// src/components/FilteredList.jsx
import React, { useState } from 'react';

function FilteredList() {
  const [filter, setFilter] = useState('');

  const people = [
    { id: 1, name: 'João', profession: 'Desenvolvedor' },
    { id: 2, name: 'Ana', profession: 'Design' },
    { id: 3, name: 'Paula', profession: 'Medicina' },
    { id: 4, name: 'Carlos', profession: 'Desenvolvedor' },
    { id: 5, name: 'Mariana', profession: 'Educação' }
  ];

  const filteredPeople = people.filter(p =>
    p.profession.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar por Profissão</h2>
      <input
        type="text"
        placeholder="Digite uma profissão..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredPeople.map(p => (
          <li key={p.id}>{p.name} - {p.profession}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;