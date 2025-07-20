import React, { useEffect, useState } from 'react';
import AppRoutes from '../Routes/AppRoutes';
import './Layout.css';

const ROUTE_PREFIX = 'xml-parse/#/';
const DEFAULT_ROUTE = 'home';

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'tools', label: 'Tools', icon: '🔧' },
  // { id: 'map', label: 'Map', icon: '🗺️' },
  // { id: 'about', label: 'About', icon: 'ℹ️' },
  // { id: 'contact', label: 'Contact', icon: '📧' }
];

const getRouteFromHash = () => {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const prefix = window.location.pathname.replace(/^\//, '');
  if (prefix !== 'xml-parse') return DEFAULT_ROUTE;
  if (!hash) return 'home';
  const found = navItems.find(item => item.id === hash);
  return found ? found.id : DEFAULT_ROUTE;
};

const Layout = () => {
  const [activeTab, setActiveTab] = useState(getRouteFromHash());

  // Listen for hash changes
  useEffect(() => {
    const onHashChange = () => {
      setActiveTab(getRouteFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // On mount, redirect to default if not at xml-parse/#/ or xml-parse/#/tools
  useEffect(() => {
    const prefix = window.location.pathname.replace(/^\//, '');
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (prefix !== 'xml-parse') {
      window.location.replace('/xml-parse/#/');
    } else if (!window.location.hash || !navItems.some(item => item.id === hash) && hash !== '') {
      window.location.hash = '#/';
    }
  }, []);

  const handleNav = (id) => {
    window.location.pathname = '/xml-parse';
    window.location.hash = id === 'home' ? '#/' : `#/${id}`;
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
          <AppRoutes activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default Layout; 