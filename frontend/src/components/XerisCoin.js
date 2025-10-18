```jsx
// Updated XerisCoin.js
import React from 'react';
import { FaCoins, FaMap, FaTelegram, FaExternalLinkAlt, FaBuilding, FaHandshake, FaRocket } from 'react-icons/fa';

function XerisCoin() {
  return (
    <section className="xeriscoin-section">
      <h2 className="xeriscoin-title">XerisCoin: Powering the Future of Real-World Assets</h2>
      <p className="xeriscoin-text">
        <strong>XerisCoin ($XERIS)</strong>, patent-pending (US #63/887,511), is the native token of our Layer 1 blockchain, delivering 10,000+ TPS with a triple consensus (PoW, PoH, PoS). Our Q3 2025 testnet achieved 100% uptime, proving the network's scalability and security for tokenizing real-world assets.
      </p>
      
      <div className="xeriscoin-details">
        <div className="detail-card">
          <FaMap className="detail-icon" />
          <h3 className="landing-subtitle">The XerisCoin Network</h3>
          <ul className="scripture-list">
            <li>Layer 1 blockchain with hybrid consensus for unmatched speed and security</li>
            <li>10,000+ TPS on live testnet—ready for high-volume real-world applications</li>
            <li>Designed for seamless tokenization of assets like property and wellness protocols</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaBuilding className="detail-icon" />
          <h3 className="landing-subtitle">LOIs for Asset Tokenization</h3>
          <ul className="scripture-list">
            <li>Signed Letters of Intent to tokenize real estate properties on the Xeris network</li>
            <li>Enabling fractional ownership and liquidity for traditionally illiquid assets</li>
            <li>XerisCoin as the utility token for transactions, staking, and governance in RWA ecosystems</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaHandshake className="detail-icon" />
          <h3 className="landing-subtitle">Strategic Partnership: Activate Supplements</h3>
          <ul className="scripture-list">
            <li>Exclusive contract for tokenizing wellness protocols via the Super Human Program</li>
            <li>7% equity stake + 20% revenue share, driving real utility for $XERIS in biotech-blockchain fusion</li>
            <li>Tokenized supplements and health assets on Xeris for instant liquidity and global access</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaRocket className="detail-icon" />
          <h3 className="landing-subtitle">Pump.fun Launch</h3>
          <ul className="scripture-list">
            <li>Launched on Pump.fun for early community engagement and fair distribution</li>
            <li>Pump address: <a href="https://pump.fun/9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump" target="_blank" rel="noopener noreferrer">9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump</a></li>
            <li>Tokens redeemable as SOL-wrapped $XERIS equivalent on mainnet launch</li>
          </ul>
        </div>
      </div>
      
      <div className="button-group">
        <a href="https://t.me/xeriscoin" target="_blank" rel="noopener noreferrer" className="cta-btn glowing-btn">
          <FaTelegram className="btn-icon" /> Join Telegram
        </a>
        <a href="https://www.xerisweb.com" className="cta-btn glowing-btn">
          <FaExternalLinkAlt className="btn-icon" /> Explore Network
        </a>
        <a href="https://pump.fun/9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump" target="_blank" rel="noopener noreferrer" className="cta-btn glowing-btn">
          <FaRocket className="btn-icon" /> Buy on Pump.fun
        </a>
      </div>
    </section>
  );
}

export default XerisCoin;
```