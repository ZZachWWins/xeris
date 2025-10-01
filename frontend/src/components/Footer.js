// Updated Footer.js
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Assuming react-icons is installed; add if not

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Xeris Web Co.</h3>
          <p className="footer-text">
            Redefining payments with XerisCoin ($XERIS) and innovative blockchain solutions. © 2025 All rights reserved. Built by Zachary.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/projects" className="footer-link">Projects</a></li>
            <li><a href="/xeriscoin" className="footer-link">XerisCoin</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
              aria-label="Visit our Twitter"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="Visit our LinkedIn"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="Visit our GitHub"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="mailto:zachary@xerisweb.com"
              className="social-icon email"
              aria-label="Email us"
            >
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="wave"></div>
    </footer>
  );
}

export default Footer;