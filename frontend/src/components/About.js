import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Xeris Web Co.</h2>
        <p className="about-text">
          Led by Zachary, who built *ZeroMart* in 4 hours and launched *X-POD* (a $55M health AI vision), Xeris Web Co. creates responsive, modern websites that empower businesses.
        </p>
        <p className="about-text">
          We’re pioneering the future with <strong>X-POD</strong> (health AI for personalized wellness) and <strong>XerisCoin ($XERIS)</strong>, a DeFi token on Binance Smart Chain rewarding health goals via a cutting-edge dApp.
        </p>
        <Link to="/xeriscoin" className="cta-btn glowing-btn">Discover XerisCoin</Link>
      </div>
    </section>
  );
}

export default About;