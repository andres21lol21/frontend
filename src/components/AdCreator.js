// src/components/AdCreator.js
import React, { useState } from 'react';
import '../styles/AdCreator.css';

const AdCreator = () => {
  const [product, setProduct] = useState('');
  const [preview, setPreview] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleProductChange = (e) => {
    setProduct(e.target.value);
    setPreview(`Anuncio para ${e.target.value}`);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    // Lógica para actualizar la vista previa basada en la plantilla seleccionada
    setPreview(`Anuncio para ${product} usando ${template.title}`);
  };

  const templates = [
    { id: 1, title: 'Plantilla 1', description: 'Descripción de la plantilla 1' },
    { id: 2, title: 'Plantilla 2', description: 'Descripción de la plantilla 2' },
    { id: 3, title: 'Plantilla 3', description: 'Descripción de la plantilla 3' },
  ];

  const recommendedProducts = [
    { id: 1, name: 'Producto A', sales: '5000 ventas' },
    { id: 2, name: 'Producto B', sales: '4500 ventas' },
    { id: 3, name: 'Producto C', sales: '4000 ventas' },
    // Añadir más productos recomendados
  ];

  return (
    <div className="ad-creator-section">
      <div className="search-section">
        <div className="product-input-container">
          <label htmlFor="product">Introduce el producto:</label>
          <input
            type="text"
            id="product"
            value={product}
            onChange={handleProductChange}
            placeholder="Ejemplo: Smartphone"
          />
          <button onClick={() => {/* Lógica para obtener ideas */}}>
            Obtener Ideas
          </button>
        </div>
      </div>

      <div className="preview-section">
        <h2>Vista Previa del Anuncio</h2>
        <div className="preview-container">
          {preview ? (
            <div className="preview-card">
              <h3>{preview}</h3>
              <p>Detalles del anuncio aquí...</p>
            </div>
          ) : (
            <p>Introduce un producto para ver la vista previa.</p>
          )}
        </div>
      </div>

      <div className="templates-section">
        <h2>Plantillas de Anuncios</h2>
        <div className="templates-container">
          {templates.map(template => (
            <div
              key={template.id}
              className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
              onClick={() => handleTemplateSelect(template)}
            >
              <h3>{template.title}</h3>
              <p>{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="recommended-products-section">
        <h2>Productos Recomendados</h2>
        <div className="recommended-products-container">
          {recommendedProducts.map(product => (
            <div key={product.id} className="recommended-product-card">
              <h3>{product.name}</h3>
              <p>{product.sales}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdCreator;
