// src/components/MyButton.jsx
import React from 'react';

function MyButton({ onClick, text }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', margin: '5px', fontSize: '16px' }}>
      {text}
    </button>
  );
}

export default MyButton;