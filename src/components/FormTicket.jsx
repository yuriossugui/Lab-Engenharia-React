import React, { useState } from 'react';

export default function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Vamos fazer o check-in</h2>
      <label>
        Primeiro Nome:{' '}
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          className='form-control'
        />
      </label>
      <br />
      <label>
        Sobrenome:{' '}
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          className='form-control'
        />
      </label>
      <p>
        Este ticket sera emitido para: <b>{fullName}</b>
      </p>
    </>
  );
}