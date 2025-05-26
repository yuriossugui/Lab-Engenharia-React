import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 1);
  }

  return (
    <div>
      <p>You clicked {number} times.</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default Counter;