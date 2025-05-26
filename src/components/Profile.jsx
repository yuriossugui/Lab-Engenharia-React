// src/components/Profile.jsx
import React from 'react';

function Profile({ name, role, image }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <img src={image} alt={`Foto de ${name}`} width="100" />
      <h3>{name}</h3>
      <p><strong>Função:</strong> {role}</p>
    </div>
  );
}

export default Profile;