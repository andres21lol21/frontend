import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/products');
  };

  const navigateToAds = () => {
    navigate('/ads');
  };

  const navigateToWhatsApp = () => {
    navigate('/whatsapp-assist');
  };

  return (
    <div className="home">
      <h1>Bienvenido a nuestro software de IA</h1>
      <p>
        Nuestra inteligencia artificial te ayuda a encontrar los productos con mayor probabilidad de éxito en el mercado, crear anuncios efectivos y proporcionar asistencia a través de WhatsApp.
      </p>

      <section className="features">
        <div>
          <h2>Descubre productos exitosos</h2>
          <button onClick={navigateToProducts}>Ver Productos</button>
        </div>
        <div>
          <h2>Crea anuncios atractivos</h2>
          <button onClick={navigateToAds}>Crear Anuncios</button>
        </div>
        <div>
          <h2>Asistencia por WhatsApp</h2>
          <button onClick={navigateToWhatsApp}>Iniciar Asistencia</button>
        </div>
      </section>

      <section className="feed">
        <h2>Actualizaciones Recientes</h2>
        <div className="feed-list">
          {/* Ejemplo de datos del feed */}
          <div className="feed-item">
            <img src="https://via.placeholder.com/150" alt="Producto" />
            <div className="feed-content">
              <h3>Producto destacado</h3>
              <p>Este es un producto exitoso en el mercado.</p>
              <button>Leer más</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
