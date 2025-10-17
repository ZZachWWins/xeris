// Updated Projects.js with Lightbox Gallery
import React, { useState } from 'react';
import { FaSearch, FaBrain, FaEnvelope, FaRocket, FaTimes } from 'react-icons/fa'; // Added FaTimes for close button

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  // Gallery items data
  const galleryItems = [
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_1200,h_900,c_fill/v1/IMG_1847_hvlmpz.jpg',
      alt: 'Terminal showing blocks being mined on XerisCoin testnet with difficulty adjustment',
      caption: 'Live block mining on testnet with real-time difficulty adjustment'
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_1200,h_900,c_fill/v1/Screenshot_2025-10-02_at_5.37.11_PM_tyayyd.jpg',
      alt: 'Block explorer displaying freshly mined blocks on XerisCoin testnet',
      caption: 'Block explorer showing freshly mined blocks and transactions'
    },
    {
      type: 'image',
      src: 'https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_1200,h_900,c_fill/v1/IMG_1919_gqfe0c.jpg',
      alt: 'iOS app connecting to XerisCoin testnet',
      caption: 'iOS app connecting to the testnet wallet'
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/di6yjluli/video/upload/q_auto,f_auto/v1/ScreenRecording_09-30-2025_22-56-55_1_dywrer.mp4',
      poster: 'https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_1200,h_900,c_fill/v1/IMG_1919_gqfe0c.jpg',
      alt: 'Node running and connected to testnet',
      caption: 'Node running and maintaining connection to testnet'
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/di6yjluli/video/upload/q_auto,f_auto/v1/ScreenRecording_09-30-2025_23-16-21_1_m46ztn.mp4',
      poster: 'https://res.cloudinary.com/di6yjluli/image/upload/q_auto,f_auto,w_1200,h_900,c_fill/v1/IMG_1919_gqfe0c.jpg',
      alt: 'iOS app losing connection when node stops',
      caption: 'Stopping the node and watching real-time connection loss in iOS app'
    }
  ];

  const openLightbox = (item) => {
    setCurrentMedia(item);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentMedia(null);
    // Pause video if open
    const video = document.querySelector('.lightbox-video');
    if (video) video.pause();
  };

  // Close on ESC key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

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
          
          {/* Partnership Embed */}
          <div className="partnership-highlight">
            <h4>Live Integration: Activate Supplements</h4>
            <p>Leveraging XerisCoin for tokenized supps—7% equity, 20% rev share. This biotech tie-in drives liquidity and hits our $50M cap goals head-on.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image" style={{ background: 'linear-gradient(135deg, #ff4500, #dc143c)', height: '200px' }}>
            <FaRocket className="project-icon" />
          </div>
          <h3 className="project-title">Xeris dApp</h3>
          <p className="project-description">A decentralized application rewarding users with $XERIS for achieving milestones, integrated with our triple consensus blockchain. Check the iOS connectivity demos in the gallery!</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h3 className="gallery-title">Live Testnet Demos</h3>
        <p className="gallery-subtitle">Real-time captures from our Q3 2025 testnet—watch the blockchain in action.</p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(item)}>
              {item.type === 'image' ? (
                <img 
                  src={`${item.src.replace('w_1200,h_900', 'w_400,h_300')}`} 
                  alt={item.alt} 
                  className="gallery-media"
                />
              ) : (
                <video 
                  className="gallery-media" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster={item.poster ? item.poster.replace('w_1200,h_900', 'w_400,h_300') : undefined}
                >
                  <source src={item.src} type="video/mp4" />
                  <img 
                    src={item.poster ? item.poster.replace('w_1200,h_900', 'w_400,h_300') : ''} 
                    alt={item.alt} 
                    className="gallery-media-fallback"
                  />
                </video>
              )}
              <p className="gallery-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentMedia && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <div className="lightbox-media">
              {currentMedia.type === 'image' ? (
                <img src={currentMedia.src} alt={currentMedia.alt} className="lightbox-image" />
              ) : (
                <video 
                  className="lightbox-video" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster={currentMedia.poster}
                >
                  <source src={currentMedia.src} type="video/mp4" />
                </video>
              )}
            </div>
            <p className="lightbox-caption">{currentMedia.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;