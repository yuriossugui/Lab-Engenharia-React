import React, { useState } from 'react';

function FormQuiz() {
  const [resposta, setResposta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (resposta.trim().toLowerCase() !== 'presidente prudente') {
      alert('Resposta errada. Tente novamente!');
    } else {
      alert('Parabéns! Resposta correta.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title font-weight-bold">City quiz</h5>
          <p className="card-text">
            Qual a melhor cidade do estado de São Paulo?
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                placeholder="Digite sua resposta"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormQuiz;