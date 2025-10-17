// Updated XerisSOL.js
import React, { useState } from 'react';
import { FaBitcoin, FaExternalLinkAlt, FaExchangeAlt, FaUsers, FaTelegram } from 'react-icons/fa';

function XerisSOL() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sol_address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For Netlify form, submission is handled automatically
    // Reset form after submit
    setFormData({ name: '', email: '', sol_address: '' });
  };

  return (
    <section className="xeriscoin-section">
      {/* Hero with animated background - only at top */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">XerisSOL: Join the Revolution</h1>
          <p className="hero-text">
            Fast, fun, and future-proof on Solana. Launched on pump.fun for instant access. Build with us before mainnet—submit your address to join the early crew.
          </p>
          <div className="button-group">
            <a href="https://t.me/xeriscoin" target="_blank" rel="noopener noreferrer" className="cta-button">
              <FaTelegram className="btn-icon" /> Join Telegram Community
            </a>
            <a href="https://www.pump.fun/" className="cta-btn glowing-btn" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="btn-icon" /> Get on Pump.fun
            </a>
          </div>
        </div>
      </div>

      {/* Clean, focused form section - no background */}
      <section className="contact-section" style={{ background: 'none', padding: '4rem 2rem' }}>
        <h2 className="contact-title">Grow with Us: Submit Your Wallet</h2>
        <div className="contact-content">
          <p className="about-text" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Help us build the Xeris userbase ahead of Q4 2025 mainnet. Share your SOL address to get airdrop alerts, exclusive updates, and auto-bridge to real $XERIS. Every submit counts—let's launch strong together.
          </p>
          <form name="xerissol-address" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="form-name" value="xerissol-address" />
            <p className="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name (Optional)"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email (Optional)"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="sol_address"
                placeholder="Your SOL Wallet Address"
                value={formData.sol_address}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-btn cta-button">
              <FaUsers className="btn-icon" /> Join the Userbase
            </button>
          </form>
        </div>
      </section>

      {/* Simple details - focus on benefits for users */}
      <div className="xeriscoin-details" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div className="detail-card">
          <FaBitcoin className="detail-icon" />
          <h3 className="landing-subtitle">Why Join Early?</h3>
          <ul className="scripture-list" style={{ fontSize: '1.1rem' }}>
            <li>Be first for airdrops & rewards</li>
            <li>Shape the mainnet features</li>
            <li>Low-fee Solana speed now</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaExchangeAlt className="detail-icon" />
          <h3 className="landing-subtitle">Seamless Mainnet Swap</h3>
          <ul className="scripture-list" style={{ fontSize: '1.1rem' }}>
            <li>Your XerisSOL auto-converts to $XERIS</li>
            <li>Full value preserved at launch</li>
            <li>No hassle— just hold & grow</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default XerisSOL;