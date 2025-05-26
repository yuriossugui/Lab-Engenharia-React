import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder="Type something..." />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Form;