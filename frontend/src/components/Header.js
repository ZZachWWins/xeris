import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <h1 className="title">Xeris Web Co.</h1>
        <div className="leaf-icon"></div>
      </div>
      <nav className="navbar">
        <div className="desktop-nav">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <Link to="/" className={window.location.hash === '#/' ? 'active' : ''}>Home</Link>
          </Tilt>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <Link to="/about" className={window.location.hash === '#/about' ? 'active' : ''}>About</Link>
          </Tilt>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <Link to="/projects" className={window.location.hash === '#/projects' ? 'active' : ''}>Projects</Link>
          </Tilt>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <Link to="/contact" className={window.location.hash === '#/contact' ? 'active' : ''}>Contact</Link>
          </Tilt>
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