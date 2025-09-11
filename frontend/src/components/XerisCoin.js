import React, { useState, useEffect } from 'react';

function XerisCoin() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date('2025-10-01T00:00:00') - +new Date();
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
      <h2 className="xeriscoin-title">XerisCoin: Revolutionizing DeFi with Triple Consensus</h2>
      <p className="xeriscoin-text">
        XerisCoin ($XERIS) is a groundbreaking BEP-20 token on Binance Smart Chain, utilizing a unique triple consensus mechanism (Proof of Work, Proof of History, Proof of Stake). Our dApp rewards users for achieving fitness and nutrition goals, merging health and DeFi. Join the presale at $0.01/XERIS!
      </p>
      <div className="countdown-container">
        <h3 className="countdown-title">Presale Launches In</h3>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
      <div className="xeriscoin-details">
        <div className="detail-card">
          <h3 className="landing-subtitle">Tokenomics</h3>
          <ul className="scripture-list">
            <li>Total Supply: 1B XERIS</li>
            <li>Presale: 50% (500M tokens)</li>
            <li>Team: 20% (locked 1 year)</li>
            <li>Development: 20%</li>
            <li>Marketing: 10%</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3 className="landing-subtitle">Roadmap</h3>
          <ul className="scripture-list">
            <li>Q4 2025: Presale launch</li>
            <li>Q1 2026: dApp beta release with triple consensus integration</li>
            <li>Q2 2026: List on PancakeSwap and major exchanges</li>
          </ul>
        </div>
      </div>
      <div className="button-group">
        <a href="https://t.me/XerisCoin" target="_blank" rel="noopener noreferrer" className="cta-btn glowing-btn">Join Telegram</a>
        <a href="https://www.xerisweb.com/presale" className="cta-btn glowing-btn">Join Presale</a>
      </div>
    </section>
  );
}

export default XerisCoin;