import React, { useState } from 'react';

function Form3() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  return (
    <div>
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />
      <p>Full Name: {form.firstName} {form.lastName}</p>
      <p>Age: {form.age}</p>
    </div>
  );
}

export default Form3;