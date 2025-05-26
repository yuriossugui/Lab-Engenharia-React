// src/components/MovingDot.jsx
import React, { useState, useEffect, useRef } from 'react';

function MovingDot() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const containerRef = useRef(null);
  const lastUpdateTime = useRef(0);
  const minInterval = 16; // ~60fps
  const threshold = 5;

  const handleMove = (e) => {
    const now = performance.now();
    if (now - lastUpdateTime.current < minInterval) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    // Verifica se o cursor está dentro da área do container
    const isInContainer =
      e.clientX >= containerRect.left &&
      e.clientX <= containerRect.right &&
      e.clientY >= containerRect.top &&
      e.clientY <= containerRect.bottom;

    if (!isInContainer) return;

    const newX = e.clientX - containerRect.left;
    const newY = e.clientY - containerRect.top;

    if (Math.abs(newX - position.x) > threshold || Math.abs(newY - position.y) > threshold) {
      setPosition({ x: newX, y: newY });
      lastUpdateTime.current = now;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div>
      <h2>MovingDot dentro de uma Área</h2>
      <div
        ref={containerRef}
        style={{
          width: '400px',
          height: '400px',
          border: '2px solid #ccc',
          position: 'relative',
          backgroundColor: '#f9f9f9',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'red',
            transition: 'left 0.05s linear, top 0.05s linear',
          }}
        />
      </div>
    </div>
  );
}

export default MovingDot;