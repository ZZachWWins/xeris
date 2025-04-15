import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-section">
      <h2 className="home-title">Building Your Digital Future</h2>
      <p className="home-text">We create stunning, responsive websites tailored to your vision.</p>
      <Link to="/contact" className="cta-btn">Get Started</Link>
    </section>
  );
}

export default Home;