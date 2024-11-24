import React, { useState } from 'react';
import '../styles/AdCreator.css';

const GenerateAd = () => {
    const [productName, setProductName] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [tone, setTone] = useState('');
    const [adText, setAdText] = useState('');
    const [imageIdea, setImageIdea] = useState(''); // Nuevo estado para la idea de imagen
    const [error, setError] = useState('');

    function getCookie(name) {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '=([^;]*)');
        return cookieValue ? cookieValue.pop() : '';
    }

    const csrftoken = getCookie('csrftoken');

    const handleGenerateAd = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/generate_ad/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                    product_name: productName,
                    target_audience: targetAudience,
                    tone: tone,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setAdText(data.ad_text);
                setImageIdea(data.image_idea); // Asignar la idea de imagen
                setError('');
            } else {
                setAdText('');
                setImageIdea(''); // Vaciar la idea de imagen en caso de error
                setError(data.error || 'Error al generar el anuncio');
            }
        } catch (err) {
            setAdText('');
            setImageIdea('');
            setError('Error al comunicarse con el servidor');
        }
    };

    return (
        <section className="ad-creator-section">
            <div className="search-section">
                <h1>Generador de Anuncios</h1>
                <form onSubmit={handleGenerateAd} className="product-input-container">
                    <label htmlFor="product-name">Nombre del producto:</label>
                    <input
                        id="product-name"
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                    <small>Ejemplo: "Zapatos deportivos ultraligeros"</small>

                    <label htmlFor="target-audience">Público objetivo:</label>
                    <input
                        id="target-audience"
                        type="text"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        required
                    />
                    <small>Ejemplo: "Jóvenes deportistas de 18 a 30 años"</small>

                    <label htmlFor="tone">Tono del anuncio:</label>
                    <input
                        id="tone"
                        type="text"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        required
                    />
                    <small>Ejemplo: "Motivador y enérgico"</small>

                    <button type="submit">Generar Anuncio</button>
                </form>
            </div>

            {adText && (
                <div className="preview-section">
                    <div className="preview-container">
                        <div className="preview-card">
                            <h3>Texto del Anuncio Generado:</h3>
                            <p>{adText}</p>
                        </div>
                        {imageIdea && (
                            <div className="preview-card">
                                <h3>Idea para la Imagen:</h3>
                                <p>{imageIdea}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {error && (
                <div className="preview-section">
                    <div className="preview-container">
                        <div className="preview-card">
                            <h3>Error:</h3>
                            <p>{error}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GenerateAd;
