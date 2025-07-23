import React, { useState } from 'react';
import Home from '../Pages/Home';
import Tools from '../Pages/Tools';
import Map from '../Pages/Map';

const AppRoutes = ({ activeTab, setActiveTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'tools':
        return <Tools />;
      case 'map':
        return <Map />;
      case 'about':
        return (
          <div className="page-content">
            <h1>About</h1>
            <p>This is the About page. Add your content here.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="page-content">
            <h1>Contact</h1>
            <p>This is the Contact page. Add your contact information here.</p>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="routes-container">
      {renderContent()}
    </div>
  );
};

export default AppRoutes; 