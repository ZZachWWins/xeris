// Updated XerisCoin.js
import React, { useState, useEffect } from 'react';
import { FaCoins, FaMap, FaTelegram, FaExternalLinkAlt } from 'react-icons/fa';

function XerisCoin() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const presaleProgress = 0; // No funds raised yet

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date('2025-10-31T00:00:00') - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  return (
    <section className="xeriscoin-section">
      <h2 className="xeriscoin-title">XerisCoin: Revolutionizing Payments</h2>
      <p className="xeriscoin-text">
        <strong>XerisCoin ($XERIS)</strong>, patent-pending (US #63/887,511), is a native token on our Layer 1 blockchain, delivering 10,000+ TPS with a triple consensus (PoW, PoH, PoS). Our Q3 2025 testnet achieved 100% uptime. Presale of 10M tokens will fund 1-10M wrapped XERIS for DEX liquidity to establish market value.
      </p>
      <div className="countdown-container">
        <h3 className="countdown-title">Presale Ends In</h3>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
      <div className="presale-progress">
        <h3 className="landing-subtitle">Presale Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${presaleProgress}%` }}></div>
        </div>
        <p className="progress-text">{presaleProgress}% of 10M XERIS tokens sold</p>
      </div>
      <div className="xeriscoin-details">
        <div className="detail-card">
          <FaCoins className="detail-icon" />
          <h3 className="landing-subtitle">Tokenomics</h3>
          <ul className="scripture-list">
            <li>Total Supply: 700M XERIS</li>
            <li>Presale: 10M tokens (from 200M trust wallet)</li>
            <li>Treasury: 190M (locked)</li>
            <li>Mining: 500M (halving every 2 years)</li>
          </ul>
        </div>
        <div className="detail-card">
          <FaMap className="detail-icon" />
          <h3 className="landing-subtitle">Roadmap</h3>
          <ul className="scripture-list">
            <li>Q3 2025: Testnet completed with 10,000+ TPS</li>
            <li>Q4 2025: Mainnet launch and presale</li>
            <li>Q1 2026: 1-10M wXRS on DEX for liquidity</li>
            <li>Q2 2026: List on major exchanges</li>
          </ul>
        </div>
      </div>
      <div className="button-group">
        <a href="https://t.me/xeriscoin" target="_blank" rel="noopener noreferrer" className="cta-btn glowing-btn">
          <FaTelegram className="btn-icon" /> Join Telegram
        </a>
        <a href="https://www.xerisweb.com/presale" className="cta-btn glowing-btn">
          <FaExternalLinkAlt className="btn-icon" /> Join Presale
        </a>
      </div>
    </section>
  );
}

export default XerisCoin;