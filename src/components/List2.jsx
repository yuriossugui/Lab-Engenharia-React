import React, { useState } from 'react';

function List2() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  function handleRemove(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List2;