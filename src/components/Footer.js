// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
