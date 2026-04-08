import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, BookOpen, PlusSquare, Bell, Menu, X, User } from 'lucide-react';
import './Layout.css';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/catalog', label: 'Workshops', icon: BookOpen },
  { path: '/propose', label: 'Propose', icon: PlusSquare },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="layout">
      {/* Desktop Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <div className="logo-placeholder">WB</div>
          <h2>FOSSEE</h2>
          <button className="sidebar__close" onClick={() => setMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <nav className="sidebar__nav">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}
            >
              <item.icon size={20} className="nav-item__icon" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="main-content">
        {/* Top Header */}
        <header className="header glass-panel">
          <div className="header__left">
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="header__title">Workshop Booking</h1>
          </div>
          
          <div className="header__actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge-dot"></span>
            </button>
            <div className="user-profile">
              <User size={20} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-container animate-fade-in">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav glass-panel">
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'bottom-nav-item--active' : ''}`}
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Overlay for mobile sidebar */}
      {mobileMenuOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </div>
  );
}
