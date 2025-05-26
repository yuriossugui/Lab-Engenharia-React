import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Conversar com ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button className='btn btn-primary'>Enviar para {contact.email}</button>
    </section>
  );
}