import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <h1 className="title">Xeris Web Co.</h1>
      <nav className="navbar">
        <div className="desktop-nav">
          <Link to="/" className={window.location.hash === '#/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={window.location.hash === '#/about' ? 'active' : ''}>About</Link>
          <Link to="/projects" className={window.location.hash === '#/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/contact" className={window.location.hash === '#/contact' ? 'active' : ''}>Contact</Link>
        </div>
        <div className="mobile-nav">
          <button className="nav-menu-btn" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? 'Close Menu' : 'Menu'}
          </button>
          {showMenu && (
            <div className="nav-menu">
              <Link to="/" className="nav-menu-item" onClick={() => setShowMenu(false)}>Home</Link>
              <Link to="/about" className="nav-menu-item" onClick={() => setShowMenu(false)}>About</Link>
              <Link to="/projects" className="nav-menu-item" onClick={() => setShowMenu(false)}>Projects</Link>
              <Link to="/contact" className="nav-menu-item" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;