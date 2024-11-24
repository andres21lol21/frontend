import React, { useState, useEffect } from 'react';
import '../styles/ProductFinder.css';

const ProductFinder = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda
  const [category, setCategory] = useState('all'); // Estado para la categoría seleccionada
  const [results, setResults] = useState([]); // Estado para los resultados de búsqueda
  const [recommendedProducts, setRecommendedProducts] = useState([]); // Estado para productos recomendados
  const [categoryScores, setCategoryScores] = useState([]); // Nuevo estado para scores de categorías
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recommended products on component mount
    fetch('http://127.0.0.1:8000/encontrar_productos/')
      .then((response) => response.json())
      .then((data) => setRecommendedProducts(data))
      .catch((err) => setError('Error al cargar productos recomendados'));

    // Fetch category scores
    fetch('http://127.0.0.1:8000/encontrar_productos/')
      .then((response) => response.json())
      .then((data) => {
        // Ordenamos las categorías de mayor a menor score
        const sortedCategories = data.sort((a, b) => b.score - a.score);
        setCategoryScores(sortedCategories);
      })
      .catch((err) => setError('Error al cargar los scores de categorías'));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda real, pero la hemos desactivado
    // Para dejar el diseño intacto
  };

  return (
    <section className="product-finder-section">
      <h1>Buscador de Productos</h1>
      <p>Encuentra productos con alta probabilidad de venta y explora opciones según tus necesidades.</p>
      
      {/* Formulario de búsqueda, pero sin funcionalidad activa */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Introduce el nombre del producto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Todas las categorías</option>
          <option value="ropa">Ropa</option>
          <option value="alimentos">Alimentos</option>
          <option value="electrodomesticos">Electrodomésticos</option>
          <option value="muebles">Muebles</option>
          <option value="libros">Libros</option>
          <option value="juguetes">Juguetes</option>
          <option value="automoviles">Automóviles</option>
          <option value="belleza">Belleza</option>
          <option value="deportes">Deportes</option>
          <option value="hogar">Hogar</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      
      {error && <p className="error-message">{error}</p>}
      
      {/* Resultados de la búsqueda */}
      <div className="results-section">
        {results.length === 0 && !error && <p>No se encontraron resultados.</p>}
        {results.map((product, index) => (
          <div key={index} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
          </div>
        ))}
      </div>

      {/* Sección de productos recomendados */}
      <section className="recommended-products">
        <h2>Productos Recomendados</h2>
        <div className="recommended-list">
          {recommendedProducts.length === 0 ? (
            <p>No hay productos recomendados en este momento.</p>
          ) : (
            recommendedProducts.map((product, index) => (
              <div key={index} className="product-card recommended-card">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Precio:</strong> ${product.price}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Sección de categorías con mejores scores */}
      <section className="high-score-categories">
        <h2>Categorías con Mejor Demanda</h2>
        <div className="category-score-grid">
          {categoryScores.length === 0 ? (
            <p>No hay información de scores disponible.</p>
          ) : (
            categoryScores.map((cat, index) => (
              <div key={index} className="category-card">
                <h3>{cat.categoria}</h3>
                <div className="score-bar-container">
                  <div
                    className="score-bar"
                    style={{ width: `${cat.score}%` }}
                  ></div>
                  <p>{cat.score.toFixed(2)}%</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </section>
  );
};

export default ProductFinder;
