// Updated Projects.js
import React from 'react';
import { FaSearch, FaBrain, FaEnvelope, FaRocket } from 'react-icons/fa'; // Restored FaRocket for dApp card

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
            <FaRocket className="project-icon" />
          </div>
          <h3 className="project-title">XerisCoin Triple Consensus Blockchain</h3>
          <p className="project-description">A revolutionary blockchain utilizing PoW, PoH, and PoS for unmatched security and efficiency, supporting our DeFi ecosystem. See live testnet demos in the gallery below!</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ background: 'linear-gradient(135deg, #ff4500, #dc143c)', height: '200px' }}>
            <FaRocket className="project-icon" />
          </div>
          <h3 className="project-title">Xeris dApp</h3>
          <p className="project-description">A decentralized application rewarding users with $XERIS for achieving milestones, integrated with our triple consensus blockchain. Check the iOS connectivity demos in the gallery!</p>
        </div>
      </div>

      {/* New Gallery Section */}
      <div className="gallery-section">
        <h3 className="gallery-title">Live Testnet Demos</h3>
        <p className="gallery-subtitle">Real-time captures from our Q3 2025 testnet—watch the blockchain in action.</p>
        <div className="gallery-grid">
          {/* Mining Terminal Image */}
          <div className="gallery-item">
            <img 
              src="https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/IMG_1847_hvlmpz.jpg" 
              alt="Terminal showing blocks being mined on XerisCoin testnet with difficulty adjustment" 
              className="gallery-media"
            />
            <p className="gallery-caption">Live block mining on testnet with real-time difficulty adjustment</p>
          </div>

          {/* Block Explorer Image */}
          <div className="gallery-item">
            <img 
              src="https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/Screenshot_2025-10-02_at_5.37.11_PM_tyayyd.jpg" 
              alt="Block explorer displaying freshly mined blocks on XerisCoin testnet" 
              className="gallery-media"
            />
            <p className="gallery-caption">Block explorer showing freshly mined blocks and transactions</p>
          </div>

          {/* iOS Connection Image */}
          <div className="gallery-item">
            <img 
              src="https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/IMG_1919_gqfe0c.jpg" 
              alt="iOS app connecting to XerisCoin testnet" 
              className="gallery-media"
            />
            <p className="gallery-caption">iOS app connecting to the testnet wallet</p>
          </div>

          {/* Running/Connected Video */}
          <div className="gallery-item">
            <video 
              className="gallery-media" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="https://res.cloudinary.com/di6yjluli/video/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/ScreenRecording_09-30-2025_22-56-55_1_dywrer.mp4" type="video/mp4" />
              <img 
                src="https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/IMG_1919_gqfe0c.jpg" 
                alt="Fallback: Node running and connected to testnet" 
                className="gallery-media-fallback"
              />
            </video>
            <p className="gallery-caption">Node running and maintaining connection to testnet</p>
          </div>

          {/* Stopping/Loss Video */}
          <div className="gallery-item">
            <video 
              className="gallery-media" 
              autoPlay 
              muted 
              loop 
              playsInline
              poster="https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/IMG_1919_gqfe0c.jpg"
            >
              <source src="https://res.cloudinary.com/di6yjluli/video/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/ScreenRecording_09-30-2025_23-16-21_1_m46ztn.mp4" type="video/mp4" />
              <img 
                src="https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_400,h_300,c_fill/v1/IMG_1919_gqfe0c.jpg" 
                alt="Fallback: iOS app losing connection when node stops" 
                className="gallery-media-fallback"
              />
            </video>
            <p className="gallery-caption">Stopping the node and watching real-time connection loss in iOS app</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;