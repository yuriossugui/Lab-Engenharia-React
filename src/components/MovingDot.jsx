import React, { useState } from 'react';

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  }

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMove}>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
    </div>
  );
}

export default MovingDot;