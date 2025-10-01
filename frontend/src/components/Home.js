import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <h1 className="hero-title">Xeris Web Co.: Redefining Payments with XerisCoin</h1>
      <p className="hero-text">
        <strong>XerisCoin ($XERIS)</strong>, patent-pending (US #63/887,511), powers our Layer 1 blockchain with a triple consensus (PoW, PoH, PoS) for 10,000+ TPS. Testnet completed Q3 2025 with 100% uptime. Join our presale of 10M tokens to fund DEX liquidity and revolutionize payments with <strong>X-POD</strong>!
      </p>
      <div className="button-group">
        <Link to="/projects" className="cta-button">Explore Our Innovations</Link>
        <Link to="/xeriscoin" className="cta-button glowing-btn">Join XerisCoin Presale</Link>
      </div>
      <div className="milestones-section">
        <h2 className="milestones-title">Our Achievements</h2>
        <div className="milestones-grid">
          <div className="milestone-card">
            <h3>Testnet Success</h3>
            <p>Completed Q3 2025 with 10,000+ TPS and 100% uptime.</p>
          </div>
          <div className="milestone-card">
            <h3>Patent Pending</h3>
            <p>Filed US Provisional Application #63/887,511 for triple consensus.</p>
          </div>
          <div className="milestone-card">
            <h3>Presale Launched</h3>
            <p>Offering 10M XERIS from trust wallet to seed DEX liquidity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;