import React from 'react';

// Importando todos os componentes
import Toolbar from '../components/Toolbar';
import Gallery from '../components/Gallery';
import Counter from '../components/Counter';
import Form from '../components/Form';
import MovingDot from '../components/MovingDot';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';
import List from '../components/List';
import List2 from '../components/List2';
import ShapeEditor from '../components/ShapeEditor';
import CounterList from '../components/CounterList';
import List3 from '../components/List3';
import BucketList from '../components/BucketList';

function Aula11() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Componentes da Atividade - Aula 11</h1>

      <section>
        <h2>1. Toolbar</h2>
        <Toolbar
          onPlayMovie={() => alert('Reproduzindo filme...')}
          onUploadImage={() => alert('Fazendo upload da imagem...')}
        />
      </section>

      <hr />

      <section>
        <h2>2. Gallery</h2>
        <Gallery />
      </section>

      <hr />

      <section>
        <h2>3. Counter</h2>
        <Counter />
      </section>

      <hr />

      <section>
        <h2>4. Form</h2>
        <Form />
      </section>

      <hr />

      <section>
        <h2>5. MovingDot</h2>
        <MovingDot />
      </section>

      <hr />

      <section>
        <h2>6. Form2</h2>
        <Form2 />
      </section>

      <hr />

      <section>
        <h2>7. Form3</h2>
        <Form3 />
      </section>

      <hr />

      <section>
        <h2>8. List</h2>
        <List />
      </section>

      <hr />

      <section>
        <h2>9. List2</h2>
        <List2 />
      </section>

      <hr />

      <section>
        <h2>10. ShapeEditor</h2>
        <ShapeEditor />
      </section>

      <hr />

      <section>
        <h2>11. CounterList</h2>
        <CounterList />
      </section>

      <hr />

      <section>
        <h2>12. List3</h2>
        <List3 />
      </section>

      <hr />

      <section>
        <h2>13. BucketList</h2>
        <BucketList />
      </section>
    </div>
  );
}

export default Aula11;