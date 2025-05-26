// src/components/Avatar.jsx
import React from 'react';

function Avatar({ person, size = 100 }) {
  return (
    <img
      src={person.imageUrl}
      alt={`Foto de ${person.name}`}
      width={size}
      height={size}
      style={{ borderRadius: '50%' }}
    />
  );
}

export default Avatar;