// New XerisSOL.js
import React, { useState } from 'react';
import { FaCoins, FaSolana, FaExternalLinkAlt, FaExchangeAlt } from 'react-icons/fa';

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
    <section className="xeriscoin-section"> {/* Reuse xeriscoin-section for consistency */}
      <div className="hero-bg"></div> {/* Reuse hero-bg for gradient */}
      <div className="hero-content"> {/* Reuse hero-content for centering */}
        <h1 className="hero-title">XerisSOL: Solana-Powered Revolution</h1>
        <p className="hero-text">
          Unlock the speed of Solana with <strong>XerisSOL ($XERIS)</strong>—our high-velocity token for seamless DeFi and wellness tokenization. Launched on pump.fun for instant liquidity, integrated with Activate Supplements for tokenized protocols. Submit your SOL address below to claim presale airdrops and join the liquidity pool!
        </p>
        <p className="hero-text">
          <strong>Bridge to Mainnet:</strong> If you bought XerisSOL, you'll receive equivalent value in mainnet XerisCoins upon our Q4 2025 mainnet launch—seamless swap via automated bridge. No action needed post-submission!
        </p>
        <div className="button-group">
          <a href="https://t.me/+WSqVnLfN36ZkMjAx" target="_blank" rel="noopener noreferrer" className="cta-button">
            <FaSolana className="btn-icon" /> Join Telegram
          </a>
          <a href="https://www.pump.fun/" className="cta-btn glowing-btn" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="btn-icon" /> Launch on Pump.fun
          </a>
        </div>
      </div>

      {/* Form Section - Reuse contact-section styles */}
      <section className="contact-section">
        <h2 className="contact-title">Submit Your SOL Address</h2>
        <div className="contact-content">
          <p className="about-text">
            Bought XerisSOL on Solana via pump.fun? Drop your wallet address here to verify and receive updates on airdrops, liquidity events, and Super Human Program integrations. We'll keep it secure—no spam, just gains. Your holdings auto-convert to mainnet $XERIS at launch.
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
              <FaCoins className="btn-icon" /> Submit & Claim
            </button>
          </form>
        </div>
      </section>

      {/* Details Cards - Reuse detail-card from XerisCoin */}
      <div className="xeriscoin-details">
        <div className="detail-card">
          <FaSolana className="detail-icon" />
          <h3 className="landing-subtitle">Solana Edge</h3>
          <ul className="scripture-list">
            <li>65K+ TPS for lightning-fast trades</li>
            <li>Low fees via pump.fun launch</li>
            <li>Integrated with Raydium DEX</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaExchangeAlt className="detail-icon" />
          <h3 className="landing-subtitle">Mainnet Bridge</h3>
          <ul className="scripture-list">
            <li>Auto-swap XerisSOL to $XERIS on launch</li>
            <li>1:1 value preservation</li>
            <li>Q4 2025 activation—no extra steps</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default XerisSOL;