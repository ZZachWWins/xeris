import React from 'react';

function XerisCoin() {
  return (
    <section className="xeriscoin-section">
      <h2 className="xeriscoin-title">XerisCoin: Revolutionizing DeFi with Triple Consensus</h2>
      <p className="xeriscoin-text">
        XerisCoin ($XERIS) is a groundbreaking BEP-20 token on Binance Smart Chain, utilizing a unique triple consensus mechanism (Proof of Work, Proof of History, Proof of Stake). Our dApp rewards users for achieving fitness and nutrition goals, merging health and DeFi. Join the presale at $0.01/XERIS!
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
          <li>Q1 2026: dApp beta release with triple consensus integration</li>
          <li>Q2 2026: List on PancakeSwap and major exchanges</li>
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