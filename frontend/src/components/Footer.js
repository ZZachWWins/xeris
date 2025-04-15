import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Xeris Web Co. Built by Zachary. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter"></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github"></a>
        </div>
      </div>
      <div className="wave"></div>
    </footer>
  );
}

export default Footer;