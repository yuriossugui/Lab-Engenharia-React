import React, { useState } from 'react';

function List3() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  function handleEdit(index) {
    const newName = prompt('Edit item:');
    if (newName !== null) {
      const updatedItems = items.map((item, i) =>
        i === index ? newName : item
      );
      setItems(updatedItems);
    }
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List3;