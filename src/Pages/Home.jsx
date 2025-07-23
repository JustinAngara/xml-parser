import React from 'react';
import './Home.css';

const Home = ({ setActiveTab }) => {
  const openXMLManager = () => {
    window.open('https://chatgpt.com/g/g-687b0631d4448191b416e2fd9ab2b739-xml-manager', '_blank');
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to XML App</h1>
        <p>A powerful application for working with XML tools and utilities</p>
        <div className="hero-buttons">
          <button className="primary-button" onClick={() => setActiveTab && setActiveTab('tools')}>Get Started</button>
          <button className="ai-button" onClick={openXMLManager}>
            <span className="ai-icon">🤖</span>
            Open XML Manager AI
          </button>
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
      
      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Assistant</h3>
            <p>Get help with XML using our AI-powered manager</p>
            <button className="feature-button" onClick={openXMLManager}>
              Open AI Manager
            </button>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Powerful Tools</h3>
            <p>Access a variety of XML processing tools</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Processing</h3>
            <p>Quick and efficient XML operations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure</h3>
            <p>Safe and reliable XML handling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 