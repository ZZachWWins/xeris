// Updated About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa'; // Using react-icons now that it's installed

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Xeris Web Co.</h2>
        <p className="about-text">
          Led by Zachary Winkle, Xeris Web Co. pioneers global payments with <strong>XerisCoin ($XERIS)</strong>, a patent-pending (US #63/887,511) native token on our Layer 1 blockchain. Our Q3 2025 testnet achieved 10,000+ TPS with 100% uptime. Presale of 10M tokens will fund wrapped tokens for DEX liquidity.
        </p>
        <p className="about-text">
          We're not just building tech—we're crafting the future of decentralized finance with pure innovation and zero-compromise security. From Texas roots to global reach, our team turns bold ideas into unbreakable realities.
        </p>
        <div className="about-features">
          <div className="feature-card">
            <FaRocket className="feature-icon" />
            <h3>Innovation First</h3>
            <p>Proprietary tools and algorithms built from the ground up, no off-the-shelf crutches.</p>
          </div>
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Unmatched Security</h3>
            <p>Triple consensus blockchain ensuring your assets are fortified like never before.</p>
          </div>
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Proven Growth</h3>
            <p>SEO mastery and custom AI driving real results without a dime on ads.</p>
          </div>
        </div>

        {/* New Strategic Partnerships Section */}
        <section id="partnerships" className="partnerships-section">
          <h2>Strategic Partnerships: Fueling Growth</h2>
          <p>We're not flying solo—collaborations like our deal with Activate Supplements underscore market demand for Xeris tech. This biotech-blockchain bridge unlocks tokenized assets, deferred funding milestones, and shared revenue streams, propelling us toward Q1 2026 mainnet and beyond.</p>
          
          <div className="partnership-grid">
            <div className="partnership-card">
              <img src="/assets/activate-logo.png" alt="Activate Supplements" className="partner-logo" /> {/* Add your logo asset */}
              <h3>Activate Supplements x Xeris Web</h3>
              <ul>
                <li><strong>Equity Boost:</strong> 7% immediate stake in Activate, signaling investor confidence in our Layer-1 prowess.</li>
                <li><strong>Revenue Synergy:</strong> 20% of Super Human Program yields, powered by XerisCoin's PoW/PoH/PoS for seamless, low-fee transactions.</li>
                <li><strong>Funding Catalysts:</strong> Deferred payments unlock at $100K-$250K thresholds, with kill fees as safeguards—proving demand for tokenized health protocols.</li>
                <li><strong>Market Impact:</strong> Tokenizes wellness assets for instant liquidity pools on DEXes, targeting Austin's millennial crypto wave and beyond.</li>
              </ul>
              <p className="impact-note">This partnership validates XerisCoin's edge: 10K+ TPS testnet, treasury-backed airdrops, and a path to $50M cap by EOY. It's not hype—it's hardware-secured reality.</p>
              <button className="learn-more-btn" onClick={() => window.location.href='mailto:zachary@xerisweb.com?subject=Xeris Partnership Inquiry'}>
                Partner With Us
              </button>
            </div>
          </div>
        </section>

        <Link to="/xeriscoin" className="cta-btn glowing-btn">Discover XerisCoin</Link>
      </div>
    </section>
  );
}

export default About;