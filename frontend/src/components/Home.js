import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <h1 className="hero-title">Xeris Web Co.: Pioneering AI & Blockchain Innovation</h1>
      <p className="hero-text">
        We lead the industry with cutting-edge AI solutions and blockchain technology, powered by <strong>XerisCoin ($XERIS)</strong>, the world's first triple consensus token (PoW, PoH, PoS) revolutionizing decentralized finance and health incentives.
      </p>
      <div className="button-group">
        <Link to="/projects" className="cta-button">Explore Our Innovations</Link>
        <Link to="/xeriscoin" className="cta-button">Join XerisCoin Presale</Link>
      </div>
    </section>
  );
}

export default Home;