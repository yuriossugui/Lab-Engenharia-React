import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Engenharia</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/aula9">Aula 9</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aula10">Aula 10</Link>
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
