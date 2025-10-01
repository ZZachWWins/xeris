import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Xeris Web Co.</h2>
        <p className="about-text">
          Led by Zachary Winkle, Xeris Web Co. pioneers global payments with <strong>XerisCoin ($XERIS)</strong>, a patent-pending (US #63/887,511) native token on our Layer 1 blockchain. Our Q3 2025 testnet achieved 10,000+ TPS with 100% uptime. Presale of 10M tokens will fund wrapped tokens for DEX liquidity.
        </p>
        <p className="about-text">
          Our <strong>X-POD</strong> platform delivers AI-driven health solutions, targeting a $7T market. Starting with Texas merchants, we’re building a decentralized ecosystem. Join our presale to drive the future of payments and health tech!
        </p>
        <Link to="/xeriscoin" className="cta-btn glowing-btn">Discover XerisCoin</Link>
      </div>
    </section>
  );
}

export default About;