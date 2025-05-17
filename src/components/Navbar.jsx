import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Engenharia</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Atividade Letreiro</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Atividade Relogio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/atividade10">Atividade 10</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
