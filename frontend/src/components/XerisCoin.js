// Updated XerisCoin.js - Added Alpha Download Button
import React from 'react';
import { FaMap, FaTelegram, FaExternalLinkAlt, FaBuilding, FaHandshake, FaRocket, FaCode } from 'react-icons/fa';

function XerisCoin() {
  return (
    <section className="xeriscoin-section">
      {/* New Hero Image - Full Size at Top */}
      <div className="xeriscoin-hero-image">
        <img 
          src="https://res.cloudinary.com/di6yjluli/image/upload/f_auto,q_auto/v1/IMG_20251030_201639_467_n9omp6.jpg" 
          alt="XerisCoin promotional banner" 
          className="hero-img-full"
        />
      </div>
      
      <h2 className="xeriscoin-title">XerisCoin: The Native Token for Real-World Asset Innovation</h2>
      <p className="xeriscoin-text">
        <strong>XerisCoin ($XERIS)</strong>, patent-pending (US #63/887,511), powers our Layer 1 blockchain with triple consensus (PoW, PoH, PoS) for 10,000+ TPS. Q3 2025 testnet delivered 100% uptime, validating scalability for tokenized assets. Acquire via our pump.fun launch—backed 1:1 in USD value and redeemable 5:1 in $XERIS from the treasury on mainnet.
      </p>
      
      <div className="xeriscoin-details">
        <div className="detail-card">
          <FaMap className="detail-icon" />
          <h3 className="landing-subtitle">Layer 1 Excellence</h3>
          <ul className="scripture-list">
            <li>Hybrid consensus for superior speed and security</li>
            <li>Proven 10,000+ TPS on testnet—enterprise-ready</li>
            <li>Optimized for RWA tokenization, from real estate to biotech</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaBuilding className="detail-icon" />
          <h3 className="landing-subtitle">RWA Tokenization Pipeline</h3>
          <ul className="scripture-list">
            <li>LOIs secured for real estate fractionalization</li>
            <li>Liquidity unlocked for illiquid assets via $XERIS utility</li>
            <li>Governance, staking, and transaction token for RWA ecosystems</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaHandshake className="detail-icon" />
          <h3 className="landing-subtitle">Activate Supplements Partnership</h3>
          <ul className="scripture-list">
            <li>Tokenizing wellness protocols in the Super Human Program</li>
            <li>7% equity + 20% rev share, fueling biotech-blockchain synergy</li>
            <li>Instant liquidity for health assets on Xeris network</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaRocket className="detail-icon" />
          <h3 className="landing-subtitle">pump.fun Launch & Backing</h3>
          <ul className="scripture-list">
            <li>Live on pump.fun for fair, instant access</li>
            <li>Address: <a href="https://pump.fun/9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump" target="_blank" rel="noopener noreferrer" className="download-link">9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump</a></li>
            <li>1:1 USD backing; redeem 5:1 in treasury $XERIS on mainnet</li>
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
          <FaRocket className="btn-icon" /> Acquire on pump.fun
        </a>
        {/* Alpha Release Button */}
        <a href="https://github.com/ZZachWWins/xeriscoin_testnet_localalpha_v1" target="_blank" rel="noopener noreferrer" className="cta-btn glowing-btn">
          <FaCode className="btn-icon" /> Download Alpha Node
        </a>
      </div>
    </section>
  );
}

export default XerisCoin;