import React from 'react';
import { Link } from 'react-router-dom';

function XerisCoin() {
  return (
    <section className="xeriscoin-section">
      <h2 className="xeriscoin-title">XerisCoin: Health Meets DeFi</h2>
      <p className="xeriscoin-text">
        XerisCoin ($XERIS) is a BEP-20 token on Binance Smart Chain, powering a decentralized app that rewards fitness and nutrition goals. Join the presale at $0.01/XERIS!
      </p>
      <div className="xeriscoin-details">
        <h3 className="landing-subtitle">Tokenomics</h3>
        <ul className="scripture-list">
          <li>Total Supply: 1B XERIS</li>
          <li>Presale: 50% (500M tokens)</li>
          <li>Team: 20% (locked 1 year)</li>
          <li>Development: 20%</li>
          <li>Marketing: 10%</li>
        </ul>
        <h3 className="landing-subtitle">Roadmap</h3>
        <ul className="scripture-list">
          <li>Q4 2025: Presale launch</li>
          <li>Q1 2026: dApp beta release</li>
          <li>Q2 2026: List on PancakeSwap</li>
        </ul>
      </div>
      <div className="button-group">
        <a href="https://t.me/XerisCoin" target="_blank" rel="noopener noreferrer" className="cta-btn glowing-btn">Join Telegram</a>
        <a href="https://www.xerisweb.com/presale" className="cta-btn glowing-btn">Join Presale</a>
      </div>
    </section>
  );
}

export default XerisCoin;