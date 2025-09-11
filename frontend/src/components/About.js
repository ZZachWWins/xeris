import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Xeris Web Co.</h2>
        <p className="about-text">
          Led by visionary Zachary, Xeris Web Co. is a global leader in AI and blockchain technology. Our flagship project, <strong>X-POD</strong>, leverages AI to deliver personalized health solutions, backed by a $55M vision.
        </p>
        <p className="about-text">
          With <strong>XerisCoin ($XERIS)</strong>, we introduce the world's first triple consensus (PoW, PoH, PoS) BEP-20 token on Binance Smart Chain, powering a decentralized app that rewards health and wellness achievements.
        </p>
        <Link to="/xeriscoin" className="cta-btn glowing-btn">Discover XerisCoin</Link>
      </div>
    </section>
  );
}

export default About;