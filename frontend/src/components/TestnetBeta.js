// Updated Component: TestnetBeta.js (Fully Working Netlify Form)
import React, { useState } from 'react';
import { FaMobileAlt, FaRocket, FaShieldAlt } from 'react-icons/fa';

function TestnetBeta() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new FormData(form)
    })
      .then(() => {
        setSubmitMessage('Thank you! You\'ve been added to the beta waitlist. Check your email for NDA details.');
        form.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setSubmitMessage('There was an error submitting the form. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="testnet-beta-section">
      <div className="app-container">
        <h2 className="testnet-title">Join the Xeris Testnet Beta: Be the First to Experience 10k+ TPS</h2>
        <p className="testnet-text">
          Be among the first to test our groundbreaking Layer 1 blockchain and iOS app. Validate the patent-pending XerisCoin ($XERIS) network with triple consensus (PoW, PoH, PoS) delivering over 10,000 TPS. 
          You'll gain early access to tokenize real-world assets, explore the Super Human Program integrations, and contribute to the mainnet launch. 
          <strong>Signups are awarded first come, first served—spots are limited!</strong> 
          Provide your real legal name, as you'll sign a non-disclosure agreement (NDA) next week to receive testnet credentials and iOS app beta.
        </p>

        <div className="testnet-features">
          <div className="detail-card fade-in">
            <FaRocket className="detail-icon" />
            <h3 className="landing-subtitle">Testnet Power</h3>
            <ul className="scripture-list">
              <li>Experience 10,000+ TPS in real-time</li>
              <li>Tokenize RWAs like real estate and biotech</li>
              <li>Validate scalability with 100% uptime</li>
            </ul>
          </div>
          <div className="detail-card fade-in">
            <FaMobileAlt className="detail-icon" />
            <h3 className="landing-subtitle">iOS App Beta</h3>
            <ul className="scripture-list">
              <li>Seamless mobile access to Xeris network</li>
              <li>Stake, govern, and transact on the go</li>
              <li>Exclusive early access for beta testers</li>
            </ul>
          </div>
          <div className="detail-card fade-in">
            <FaShieldAlt className="detail-icon" />
            <h3 className="landing-subtitle">Secure & Exclusive</h3>
            <ul className="scripture-list">
              <li>NDA-protected access for verified users</li>
              <li>First come, first served—limited spots</li>
              <li>Direct path to mainnet rewards</li>
            </ul>
          </div>
        </div>

        <form
          name="testnet-beta-signup"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="testnet-form"
          noValidate
        >
          <input type="hidden" name="form-name" value="testnet-beta-signup" />
          <input type="text" name="bot-field" style={{ display: 'none' }} />

          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Legal Name (Required for NDA)</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-input"
              placeholder="Enter your full legal name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>

          <button type="submit" className="cta-btn glowing-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Join the Beta Waitlist'}
          </button>

          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>

        <p className="testnet-note">
          <strong>First come, first served:</strong> Beta access is limited. Sign up now to secure your spot and prepare for NDA signing next week.
        </p>
      </div>
    </section>
  );
}

export default TestnetBeta;