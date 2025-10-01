// Updated Projects.js
import React from 'react';
import { FaSearch, FaBrain, FaEnvelope } from 'react-icons/fa'; // Using react-icons

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Innovations</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-image" style={{ background: 'linear-gradient(135deg, #8a5db5, #4a2e85)', height: '200px' }}>
            <FaSearch className="project-icon" />
          </div>
          <h3 className="project-title">Elite SEO Mastery</h3>
          <p className="project-description">We've propelled 6+ client sites to #1 on Google rankings purely through organic strategies—no paid plugins, no ad spend. Custom algorithms analyze and optimize content for maximum visibility.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ background: 'linear-gradient(135deg, #d4af37, #ffd700)', height: '200px' }}>
            <FaBrain className="project-icon" />
          </div>
          <h3 className="project-title">Proprietary NumPy-Based LLM</h3>
          <p className="project-description">A groundbreaking large language model engineered entirely with NumPy—no external frameworks. This lean, efficient AI powers intelligent automation, from content generation to predictive analytics, all in pure Python code.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ background: 'linear-gradient(135deg, #32cd32, #228b22)', height: '200px' }}>
            <FaEnvelope className="project-icon" />
          </div>
          <h3 className="project-title">Mass Emailer Newsletter Tool</h3>
          <p className="project-description">Custom-built mass emailer for stunning newsletters styled like Apple or Google—crisp, responsive, and brand-perfect. Send to thousands for free using open-source SMTP and pure code, with zero costs or third-party dependencies.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ background: 'linear-gradient(135deg, #800080, #4b0082)', height: '200px' }}>
            <FaBrain className="project-icon" />
          </div>
          <h3 className="project-title">XerisCoin Triple Consensus Blockchain</h3>
          <p className="project-description">A revolutionary blockchain utilizing PoW, PoH, and PoS for unmatched security and efficiency, supporting our DeFi ecosystem.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ background: 'linear-gradient(135deg, #ff4500, #dc143c)', height: '200px' }}>
            <FaRocket className="project-icon" />
          </div>
          <h3 className="project-title">Xeris dApp</h3>
          <p className="project-description">A decentralized application rewarding users with $XERIS for achieving milestones, integrated with our triple consensus blockchain.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;