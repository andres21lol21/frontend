import React, { useState } from 'react';
import '../styles/WhatsAppAssistant.css';

const WhatsAppAssistant = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState([
    // Datos de ejemplo
    { id: 1, user: 'Usuario 1', date: '2024-09-10', status: 'Pendiente', messages: ['Hola, necesito ayuda con un pedido.'] },
    { id: 2, user: 'Usuario 2', date: '2024-09-12', status: 'En progreso', messages: ['¿Cómo puedo devolver un producto?'] },
    // Más datos...
  ]);
  const [orders, setOrders] = useState([
    // Datos de ejemplo
    { id: 1, product: 'Producto A', date: '2024-09-11', status: 'Enviado' },
    { id: 2, product: 'Producto B', date: '2024-09-13', status: 'Pendiente' },
    // Más datos...
  ]);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className="whatsapp-assistant">
      <h1>Gestión del Asistente Virtual</h1>
      
      <section className="admin-panel">
        <h2>Panel de Administración</h2>
        {/* Estadísticas y gráficos aquí */}
      </section>
      
      <section className="conversations-list">
        <h2>Lista de Conversaciones</h2>
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {conversations.map((conv) => (
              <tr key={conv.id} onClick={() => handleConversationClick(conv)}>
                <td>{conv.user}</td>
                <td>{conv.date}</td>
                <td>{conv.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      {selectedConversation && (
        <section className="conversation-detail">
          <h2>Detalle de la Conversación</h2>
          <p><strong>Usuario:</strong> {selectedConversation.user}</p>
          <p><strong>Fecha:</strong> {selectedConversation.date}</p>
          <p><strong>Estado:</strong> {selectedConversation.status}</p>
          <div className="conversation-history">
            {selectedConversation.messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <textarea placeholder="Añadir nota o comentario"></textarea>
          <button>Guardar Nota</button>
        </section>
      )}
      
      <section className="orders-management">
        <h2>Gestión de Pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.product}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      <section className="interaction-history">
        <h2>Historial de Interacciones</h2>
        {/* Filtros y búsqueda aquí */}
        <button>Exportar Datos</button>
      </section>
    </div>
  );
};

export default WhatsAppAssistant;
