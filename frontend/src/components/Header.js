import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <h1 className="logo">Xeris Web Co.</h1>
      </div>
      <nav className="nav">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/" className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/about" className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/projects" className={`nav-link ${window.location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/contact" className={`nav-link ${window.location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/xeriscoin" className={`nav-link ${window.location.pathname === '/xeriscoin' ? 'active' : ''}`}>XerisCoin</Link>
        </Tilt>
      </nav>
      <div className="mobile-nav">
        <button className="cta-button" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? 'Close' : 'Menu'}
        </button>
        {showMenu && (
          <div className="nav">
            <Link to="/" className="nav-link" onClick={() => setShowMenu(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setShowMenu(false)}>About</Link>
            <Link to="/projects" className="nav-link" onClick={() => setShowMenu(false)}>Projects</Link>
            <Link to="/contact" className="nav-link" onClick={() => setShowMenu(false)}>Contact</Link>
            <Link to="/xeriscoin" className="nav-link" onClick={() => setShowMenu(false)}>XerisCoin</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;