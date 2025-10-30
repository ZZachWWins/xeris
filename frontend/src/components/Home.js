// Updated Home.js - Presale Removed, Mobile-Optimized Professional Vibe
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaFileAlt, FaHandshake } from 'react-icons/fa';

function Home() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Xeris Web Co.: Redefining Payments</h1>
        <p className="hero-text">
          <strong>XerisCoin ($XERIS)</strong>, patent-pending (US #63/887,511), powers our Layer 1 blockchain with a triple consensus (PoW, PoH, PoS) for 10,000+ TPS. Testnet completed Q3 2025 with 100% uptime. Acquire via our secure pump.fun launch and drive the future of tokenized assets.
        </p>
        
        {/* Partnership Teaser - Refined for Professional Flow */}
        <div className="partnership-teaser">
          <div className="card glow-card">
            <h3>🚀 Strategic Alliance: Activate Supplements</h3>
            <p>XerisCoin integrates with Corey's biotech powerhouse, tokenizing wellness protocols for instant liquidity. 7% equity stake + 20% Super Human Program rev share—validating $50M market cap trajectory.</p>
            <button className="cta-btn" onClick={() => window.location.href='/about#partnerships'}>
              Explore Partnership
            </button>
          </div>
        </div>
        
        <div className="button-group">
          <Link to="/projects" className="cta-button">Explore Innovations</Link>
          <Link to="/xeriscoin" className="cta-button glowing-btn">Discover XerisCoin</Link>
        </div>
      </div>
      <div className="milestones-section">
        <h2 className="milestones-title">Key Milestones</h2>
        <div className="milestones-grid">
          <div className="milestone-card">
            <FaTrophy className="milestone-icon" />
            <h3>Testnet Excellence</h3>
            <p>Delivered Q3 2025 with 10,000+ TPS and 100% uptime, proving enterprise-grade scalability.</p>
          </div>
          <div className="milestone-card">
            <FaFileAlt className="milestone-icon" />
            <h3>Patent Pending</h3>
            <p>US Provisional Application #63/887,511 secured for innovative triple consensus mechanism.</p>
          </div>
          <div className="milestone-card">
            <FaHandshake className="milestone-icon" />
            <h3>Biotech Integration</h3>
            <p>Exclusive partnership with Activate Supplements for tokenized wellness assets and liquidity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;