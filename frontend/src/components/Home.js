import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <h1 className="hero-title">Xeris Web Co.: Build Epic Digital Futures</h1>
      <p className="hero-text">
        We craft jaw-dropping websites with *ZeroMart* speed (built in 4 hours). Join the revolution with <strong>X-POD</strong> (health AI, $55M vision) and <strong>XerisCoin ($XERIS)</strong>, a DeFi token for health rewards.
      </p>
      <div className="button-group">
        <Link to="/contact" className="cta-button">Get Your Website</Link>
        <Link to="/xeriscoin" className="cta-button">Join XerisCoin Presale</Link>
      </div>
    </section>
  );
}

export default Home;