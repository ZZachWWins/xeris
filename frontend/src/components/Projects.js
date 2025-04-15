import React from 'react';

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image" style={{ backgroundColor: '#4a2e85', height: '200px' }}></div>
          <h3 className="project-title">Project One</h3>
          <p className="project-description">A stunning website for a tech startup, featuring modern design and seamless functionality.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ backgroundColor: '#8a5db5', height: '200px' }}></div>
          <h3 className="project-title">Project Two</h3>
          <p className="project-description">An e-commerce platform with a sleek, user-friendly interface and robust performance.</p>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ backgroundColor: '#d4af37', height: '200px' }}></div>
          <h3 className="project-title">Project Three</h3>
          <p className="project-description">A portfolio site for a creative agency, showcasing their work with elegance and style.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;