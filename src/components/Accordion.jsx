import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Brasil</h2>
      <Panel
        title="Sobre"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Com uma população de mais de 200 milhões de pessoas, o Brasil é o maior país da América do Sul. Sua capital é Brasília, e o país é conhecido por sua diversidade cultural, natural e econômica.
      </Panel>

      <Panel
        title="Etimologia"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        O nome "Brasil" vem do pau-brasil, uma árvore nativa cuja madeira vermelha era altamente valorizada na Europa. O nome reflete a importância dessa árvore nos primeiros anos da colonização portuguesa.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow} className="btn btn-primary">
          Mostrar
        </button>
      )}
    </section>
  );
}