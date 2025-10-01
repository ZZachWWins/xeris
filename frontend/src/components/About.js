import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Xeris Web Co.</h2>
        <p className="about-text">
          Led by Zachary Winkle, Xeris Web Co. is pioneering global payments with <strong>XerisCoin ($XERIS)</strong>, a patent-pending (US #63/887,511) native token on our own Layer 1 blockchain. With a triple consensus (PoW, PoH, PoS) delivering 10,000+ TPS, our testnet achieved 100% uptime in Q3 2025.
        </p>
        <p className="about-text">
          Our <strong>X-POD</strong> platform leverages AI for personalized health solutions, targeting a $7T market. Starting with Texas merchants, we’re building a decentralized ecosystem. Join our presale to shape the future of payments and health tech!
        </p>
        <Link to="/xeriscoin" className="cta-btn glowing-btn">Discover XerisCoin</Link>
      </div>
    </section>
  );
}

export default About;