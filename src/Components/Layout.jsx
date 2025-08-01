import React, { useState } from 'react';
import AppRoutes from '../Routes/AppRoutes';
import './Layout.css';

const navItems = [
  { id: 'home', label: 'Home', icon: '' },
  { id: 'tools', label: 'Tools', icon: '' },
  // { id: 'map', label: 'Map', icon: '' },
  // { id: 'about', label: 'About', icon: 'ℹ️' },
  // { id: 'contact', label: 'Contact', icon: '📧' }
];

const Layout = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleNav = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>XML App</h2>
        </div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        <div className="content-area">
          <AppRoutes activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </main>
    </div>
  );
};

export default Layout; 