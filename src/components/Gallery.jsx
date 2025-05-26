import React, { useState } from 'react';
import { sculptureList } from './data'; // Supondo que data.js tenha sido criado conforme o exemplo

function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  const sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h2>{sculpture.name} by {sculpture.artist}</h2>
      <p><em>{sculpture.description}</em></p>
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}

export default Gallery;