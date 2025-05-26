// src/components/PersonCard.jsx
import React from 'react';
import Avatar from './Avatar';
import Card from './Card';

const person = {
  name: 'Maria Souza',
  imageUrl: 'https://i.imgur.com/RK1zqDw.jpg '
};

function PersonCard() {
  return (
    <Card>
      <Avatar person={person} size={120} />
      <h3>{person.name}</h3>
      <p>Engenheira de Dados</p>
    </Card>
  );
}

export default PersonCard;