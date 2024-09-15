import React, { useState, useEffect } from 'react';
import '../styles/ProductFinder.css';

const ProductFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [results, setResults] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recommended products on component mount
    fetch('/api/recommended-products')
      .then((response) => response.json())
      .then((data) => setRecommendedProducts(data))
      .catch((err) => setError('Error al cargar productos recomendados'));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda real
    fetch(`/api/products?search=${searchTerm}&category=${category}`)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((err) => setError('Hubo un error al buscar productos'));
  };

  return (
    <section className="product-finder-section">
      <h1>Buscador de Productos</h1>
      <p>Encuentra productos con alta probabilidad de venta y explora opciones según tus necesidades.</p>
      
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
          <option value="electronics">Electrónica</option>
          <option value="clothing">Ropa</option>
          <option value="home">Hogar</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      
      {error && <p className="error-message">{error}</p>}
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
    </section>
  );
};

export default ProductFinder;
