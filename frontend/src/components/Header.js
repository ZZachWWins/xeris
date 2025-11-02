// Updated Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming react-icons is installed

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="logo-tilt">
          <h1 className="logo">Xeris Web Co.</h1>
        </Tilt>
      </div>
      <nav className={`nav ${showMenu ? 'mobile-open' : ''}`}>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/" className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Home</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/about" className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>About</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/projects" className={`nav-link ${window.location.pathname === '/projects' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Projects</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/contact" className={`nav-link ${window.location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Contact</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/xeriscoin" className={`nav-link ${window.location.pathname === '/xeriscoin' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>XerisCoin</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/testnet-beta" className={`nav-link ${window.location.pathname === '/testnet-beta' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Testnet Beta</Link> {/* New link */}
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/xerissol" className={`nav-link ${window.location.pathname === '/xerissol' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>XerisSOL</Link>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <Link to="/data" className={`nav-link ${window.location.pathname === '/data' ? 'active' : ''}`} onClick={() => setShowMenu(false)}>Data</Link>
        </Tilt>
      </nav>
      <div className="mobile-nav-toggle" onClick={toggleMenu}>
        {showMenu ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
      </div>
    </header>
  );
}

export default Header;