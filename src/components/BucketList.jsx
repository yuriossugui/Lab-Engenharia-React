import React, { useState } from 'react';

function BucketList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  }

  function handleRemove(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add to bucket list"
      />
      <button onClick={handleAdd}>Add</button>
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

export default BucketList;