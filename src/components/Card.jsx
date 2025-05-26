// src/components/Card.jsx
import React from 'react';

function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
}

export default Card;