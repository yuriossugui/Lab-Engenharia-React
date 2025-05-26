import React, { useState } from 'react';

function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function increment(index) {
    const newCounters = counters.map((c, i) =>
      i === index ? c + 1 : c
    );
    setCounters(newCounters);
  }

  return (
    <div>
      {counters.map((count, index) => (
        <div key={index}>
          <p>Counter {index + 1}: {count}</p>
          <button onClick={() => increment(index)}>+1</button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;