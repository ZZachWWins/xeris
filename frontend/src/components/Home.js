// Enhanced Home.js - Trust Bar Removed for Minimalism
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaFileAlt, FaHandshake } from 'react-icons/fa';

function Home() {
  return (
    <section className="hero">
      <div 
        className="hero-bg" 
        style={{
          backgroundImage: `ur[](https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,c_fill,w_auto,h_auto,g_center/v1762553601/xeris1_bu97q1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="hero-content">
        <h1 className="hero-title">Xeris Web Co.: Pioneering Secure Payments</h1>
        <p className="hero-text">
          XerisCoin ($XERIS)—patent-pending (US #63/887,511)—drives our Layer 1 blockchain with triple consensus (PoW, PoH, PoS) for 10,000+ TPS. Q3 2025 testnet: 100% uptime. Acquire now via pump.fun and unlock tokenized real-world assets.
        </p>
        
        {/* Partnership Teaser - Icon-Based, Subtle */}
        <div className="partnership-teaser">
          <div className="card glow-card fade-in">
            <FaHandshake className="partnership-icon" />
            <h3>Strategic Alliance: Activate Supplements</h3>
            <p>Integrating biotech innovation: Tokenize wellness protocols for seamless liquidity. 7% equity + 20% revenue share, targeting $50M market cap.</p>
            <button className="cta-btn" onClick={() => window.location.href = '/about#partnerships'}>
              Learn More
            </button>
          </div>
        </div>
        
        <div className="button-group">
          <Link to="/projects" className="cta-button secondary-btn">Explore Innovations</Link>
          <Link to="/xeriscoin" className="cta-button glowing-btn">Discover XerisCoin</Link>
        </div>
      </div>

      <div className="milestones-section">
        <h2 className="milestones-title">Key Milestones</h2>
        <div className="milestones-grid">
          <div className="milestone-card fade-in">
            <FaTrophy className="milestone-icon" />
            <h3>Testnet Excellence</h3>
            <p>Q3 2025: 10,000+ TPS with 100% uptime—enterprise scalability proven.</p>
          </div>
          <div className="milestone-card fade-in">
            <FaFileAlt className="milestone-icon" />
            <h3>Patent Secured</h3>
            <p>US #63/887,511 for triple consensus innovation.</p>
          </div>
          <div className="milestone-card fade-in">
            <FaHandshake className="milestone-icon" />
            <h3>Biotech Synergy</h3>
            <p>Tokenizing wellness assets with Activate Supplements for global liquidity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;