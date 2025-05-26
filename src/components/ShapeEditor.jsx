import React, { useState } from 'react';

function ShapeEditor() {
  const [shape, setShape] = useState({
    color: 'red',
    size: 'medium'
  });

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  function handleSizeChange(e) {
    setShape({
      ...shape,
      size: e.target.value
    });
  }

  return (
    <div>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <select value={shape.size} onChange={handleSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <div
        style={{
          width: shape.size === 'small' ? '50px' : shape.size === 'medium' ? '100px' : '150px',
          height: shape.size === 'small' ? '50px' : shape.size === 'medium' ? '100px' : '150px',
          backgroundColor: shape.color,
          marginTop: '20px'
        }}
      />
    </div>
  );
}

export default ShapeEditor;