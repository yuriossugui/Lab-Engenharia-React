import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Engenharia</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Semana 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Semana 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/atividade10">Semana 3</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aula11">Aula 11</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/semana4">Aula 12</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
