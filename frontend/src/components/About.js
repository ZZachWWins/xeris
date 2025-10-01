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
        <Link to="/xeriscoin" className="cta-btn glowing-btn">Discover XerisCoin</Link>
      </div>
    </section>
  );
}

export default About;