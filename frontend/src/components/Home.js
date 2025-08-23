import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-section">
      <h2 className="home-title">Xeris Web Co.: Craft Your Digital Vision</h2>
      <p className="home-text">
        We build stunning, responsive websites tailored to your business. Founded by Zachary, who created *ZeroMart* in 4 hours, we deliver excellence for startups and enterprises.
      </p>
      <p className="home-text">
        <strong>X-POD</strong>: Our health AI transforms wellness with personalized solutions, targeting a $55M impact.
      </p>
      <p className="home-text">
        <strong>XerisCoin ($XERIS)</strong>: A DeFi token on Binance Smart Chain, powering health rewards. Join our presale now!
      </p>
      <div className="button-group">
        <Link to="/contact" className="cta-btn glowing-btn">Get a Website</Link>
        <Link to="/xeriscoin" className="cta-btn glowing-btn">Explore XerisCoin</Link>
      </div>
    </section>
  );
}

export default Home;