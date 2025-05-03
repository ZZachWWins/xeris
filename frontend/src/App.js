// App.js
import React, { useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap';

const App = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.to('.hero-bg', { 
      backgroundPosition: '200% 0', 
      duration: 10, 
      repeat: -1, 
      ease: 'linear' 
    });
    gsap.from('.hero h1', { opacity: 0, y: 100, duration: 1.2, ease: 'power3.out' });
    gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.3, ease: 'power3.out' });
    gsap.from('.cta-button', { opacity: 0, scale: 0.5, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' });
    gsap.from('.product-card', {
      opacity: 0,
      y: 80,
      rotationX: 30,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.products', start: 'top 75%' }
    });
    gsap.to('.logo', { 
      scale: 1.1, 
      duration: 1.5, 
      repeat: -1, 
      yoyo: true, 
      ease: 'sine.inOut' 
    });
  }, []);

  const products = [
    { name: 'Thunder Apples', price: '$2.99/lb', img: 'https://via.placeholder.com/250x150/32cd32/fff?text=Apples' },
    { name: 'Neon Spinach', price: '$3.49/bunch', img: 'https://via.placeholder.com/250x150/800080/fff?text=Spinach' },
    { name: 'Golden Bread', price: '$4.99/loaf', img: 'https://via.placeholder.com/250x150/ffd700/fff?text=Bread' },
    { name: 'Electric Eggs', price: '$5.99/dozen', img: 'https://via.placeholder.com/250x150/32cd32/fff?text=Eggs' },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">ZeroMart ⚡️</div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-bg"></div>
        <h1>ZeroMart: Storm the Market</h1>
        <p>Grab fresh groceries with delivery faster than lightning. Unleash the revolution!</p>
        <button className="cta-button">Ride the Storm</button>
      </section>

      <section className="products">
        <h2>Electrifying Picks</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>ZeroMart - Powered by <a href="#" className="footer-link">Zero: Focus</a> to zap screen time and obesity.</p>
        <p>© 2025 ZeroMart. World domination in progress.</p>
      </footer>
    </div>
  );
};

export default App;