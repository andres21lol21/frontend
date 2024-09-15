// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a nuestro software de IA</h1>
      <p>
        Nuestra inteligencia artificial te ayuda a encontrar los productos con mayor probabilidad de éxito en el mercado, crear anuncios efectivos y proporcionar asistencia a través de WhatsApp.
      </p>
      <section className="features">
        <div>
          <h2>Descubre productos exitosos</h2>
          <p>Utiliza nuestras herramientas para encontrar productos con alta probabilidad de venta.</p>
        </div>
        <div>
          <h2>Crea anuncios atractivos</h2>
          <p>Crea y personaliza anuncios que llamen la atención de tus clientes.</p>
        </div>
        <div>
          <h2>Asistencia por WhatsApp</h2>
          <p>Proporciona atención al cliente rápida y efectiva con nuestro asistente de WhatsApp.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
