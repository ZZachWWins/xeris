// Updated XerisSOL.js - Removed unused FaExternalLinkAlt import
import React, { useState } from 'react';
import { FaBitcoin, FaExchangeAlt, FaUsers, FaTelegram, FaRocket } from 'react-icons/fa';

function XerisSOL() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sol_address: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setFormData({ name: '', email: '', sol_address: '' });
      setSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="xeriscoin-section">
      {/* Hero with animated background - only at top */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">XerisSOL: Join the Revolution</h1>
          <p className="hero-text">
            Fast, fun, and future-proof on Solana. Launched on pump.fun for instant access. Tokens redeemable as SOL-wrapped $XERIS equivalent on mainnet launch. Build with us before mainnet—submit your address to join the early crew.
          </p>
          <div className="button-group">
            <a href="https://t.me/xeriscoin" target="_blank" rel="noopener noreferrer" className="cta-button">
              <FaTelegram className="btn-icon" /> Join Telegram Community
            </a>
            <a href="https://pump.fun/9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump" className="cta-btn glowing-btn" target="_blank" rel="noopener noreferrer">
              <FaRocket className="btn-icon" /> Buy on Pump.fun
            </a>
          </div>
        </div>
      </div>

      {/* Clean, focused form section - no background */}
      <section className="contact-section">
        {success && <div className="success-message">Submission received!</div>}
        <h2 className="contact-title">Grow with Us: Submit Your Wallet</h2>
        <div className="contact-content">
          <p className="about-text">
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
      <div className="xeriscoin-details">
        <div className="detail-card">
          <FaBitcoin className="detail-icon" />
          <h3 className="landing-subtitle">Why Join Early?</h3>
          <ul className="scripture-list">
            <li>Be first for airdrops & rewards</li>
            <li>Shape the mainnet features</li>
            <li>Low-fee Solana speed now</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaExchangeAlt className="detail-icon" />
          <h3 className="landing-subtitle">Seamless Mainnet Swap</h3>
          <ul className="scripture-list">
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