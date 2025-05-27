// src/components/Toolbar.jsx
import React from 'react';
import MyButton from './MyButton';

function Toolbar2() {
  const handlePlayClick = () => {
    alert('Reproduzindo música...');
  };

  const handlePauseClick = () => {
    alert('Música pausada.');
  };

  const handleStopClick = () => {
    alert('Música parada.');
  };

  return (
    <div>
      <h2>Controles de Mídia</h2>
      <MyButton onClick={handlePlayClick} text="Play" />
      <MyButton onClick={handlePauseClick} text="Pausar" />
      <MyButton onClick={handleStopClick} text="Parar" />
    </div>
  );
}

export default Toolbar2;