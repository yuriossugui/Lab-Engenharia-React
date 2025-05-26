import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  function handleAdd() {
    const newItem = prompt('Enter new item');
    if (newItem) {
      setItems([...items, newItem]);
    }
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
}

export default List;