import { useState } from 'react';

export default function Mensagens() {
  const contacts = [
    { name: 'Yuri', email: 'yuri@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Marcelo', email: 'marcelo@mail.com' }
  ];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [text, setText] = useState('');

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Contact List */}
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        {contacts.map(contact => (
          <button
            key={contact.email}
            onClick={() => {
              setSelectedContact(contact);
              setText('');
            }}
            style={{
              marginBottom: '10px',
              padding: '10px',
              backgroundColor: selectedContact.email === contact.email ? '#ddd' : '#f9f9f9',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {contact.name}
          </button>
        ))}
      </section>

      {/* Chat */}
      <section style={{ flex: 1 }}>
        <textarea
          value={text}
          placeholder={'Conversar com: ' + selectedContact.name}
          onChange={e => setText(e.target.value)}
          style={{ width: '100%', height: '150px', padding: '10px' }}
        />
        <br />
        <button style={{ marginTop: '10px', padding: '10px' }} className='btn btn-primary'>
          Enviar para {selectedContact.email}
        </button>
      </section>
    </div>
  );
}
