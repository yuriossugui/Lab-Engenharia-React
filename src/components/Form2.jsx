import React, { useState } from 'react';

function Form2() {
  const [person, setPerson] = useState({
    name: '',
    email: ''
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <input name="name" value={person.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={person.email} onChange={handleChange} placeholder="Email" />
      <p>Name: {person.name}</p>
      <p>Email: {person.email}</p>
    </div>
  );
}

export default Form2;