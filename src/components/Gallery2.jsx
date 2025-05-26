// src/components/Gallery.jsx
import React from 'react';
import Profile from './Profile';

const people = [
  { id: 1, name: 'João Silva', role: 'Desenvolvedor Frontend', image: 'https://i.imgur.com/1bX5QH6.jpg ' },
  { id: 2, name: 'Ana Costa', role: 'Designer UI/UX', image: 'https://i.imgur.com/RK1zqDw.jpg ' },
  { id: 3, name: 'Carlos Mendes', role: 'Engenheiro de Software', image: 'https://i.imgur.com/0YFglaz.jpg ' }
];

function Gallery2() {
  return (
    <div>
      <h2>Galeria de Colaboradores</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {people.map(p => (
          <Profile key={p.id} name={p.name} role={p.role} image={p.image} />
        ))}
      </div>
    </div>
  );
}

export default Gallery2;