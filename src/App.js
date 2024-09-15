// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductFinder from './components/ProductFinder';
import AdCreator from './components/AdCreator';
import WhatsAppAssistant from './components/WhatsAppAssistant';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-finder" element={<ProductFinder />} />
          <Route path="/ad-creator" element={<AdCreator />} />
          <Route path="/whatsapp-assistant" element={<WhatsAppAssistant />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
