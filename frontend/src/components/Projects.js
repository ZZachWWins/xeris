import React from 'react';

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Innovations</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-image" style={{ backgroundColor: '#4a2e85', height: '200px' }}></div>
          <h3 className="project-title">X-POD AI Health Platform</h3>
          <p className="project-description">An AI-driven platform delivering personalized health and wellness recommendations, powered by advanced machine learning algorithms.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ backgroundColor: '#8a5db5', height: '200px' }}></div>
          <h3 className="project-title">XerisCoin Triple Consensus Blockchain</h3>
          <p className="project-description">A revolutionary blockchain utilizing PoW, PoH, and PoS for unmatched security and efficiency, supporting our DeFi health rewards ecosystem.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ backgroundColor: '#d4af37', height: '200px' }}></div>
          <h3 className="project-title">Xeris dApp</h3>
          <p className="project-description">A decentralized application rewarding users with $XERIS for achieving fitness and nutrition milestones, integrated with our triple consensus blockchain.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;