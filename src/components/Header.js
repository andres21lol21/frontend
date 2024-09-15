// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/product-finder">Encontrar Productos</Link></li>
          <li><Link to="/ad-creator">Crear Anuncios</Link></li>
          <li><Link to="/whatsapp-assistant">Asistente WhatsApp</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
