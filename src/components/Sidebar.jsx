import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li className="link-explicacion"><Link to="/tutorial">Explicación</Link></li>
        <li className="link-dashboard"><Link to="/">Dashboard</Link></li>
        <li className="link-diccionario"><Link to="/data-dictionary">Diccionario de Datos</Link></li>

      </ul>
    </nav>
  );
}

export default Sidebar;
