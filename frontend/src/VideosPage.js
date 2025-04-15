import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import StarryBackground from './StarryBackground';
import './App.css';

function VideosPage({ user, videos, loading, filteredVideos, searchTerm, setSearchTerm, handleViewIncrement, handleLike, hasLiked }) {
  const navigate = useNavigate();

  return (
    <div className="app">
      <StarryBackground />
      <header className="header">
        <h1 className="title">Video Gallery</h1>
        <p className="subtitle">Explore All Videos</p>
        <nav className="navbar">
          <button className="auth-btn" onClick={() => navigate('/')}>Home</button>
          <button className="auth-btn" onClick={() => navigate('/drkory')}>Dr. Kory</button>
          <button className="auth-btn" onClick={() => navigate('/about')}>About</button>
          <button className="auth-btn" onClick={() => navigate('/videos')}>Videos</button>
          <button className="auth-btn" onClick={() => navigate('/grenon')}>Grenon</button>
          <button className="auth-btn" onClick={() => navigate('/articles')}>Articles</button>
        </nav>
      </header>

      <main className="main">
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search videos..."
            className="search-input"
          />
        </div>

        <section className="video-grid">
          {loading ? (
            <div className="loader"></div>
          ) : filteredVideos.length === 0 ? (
            videos.length === 0 ? (
              <p className="no-videos">No videos yet—upload some!</p>
            ) : (
              <p className="no-videos">No videos match your search.</p>
            )
          ) : (
            filteredVideos.map((video) => (
              <div key={video._id} className="video-card">
                <ReactPlayer
                  url={video.fileUrl}
                  light={video.thumbnailUrl}
                  width="100%"
                  height="200px"
                  controls
                  lazy={true}
                  onStart={() => handleViewIncrement(video._id)}
                />
                <h2 className="video-title">{video.title}</h2>
                <p className="video-description">{video.description}</p>
                <p className="video-uploader">Uploaded by: {video.uploadedBy}</p>
                <p className="video-views">Views: {video.views || 0}</p>
                <div className="like-section">
                  <button
                    onClick={() => handleLike(video._id)}
                    className={`like-btn ${hasLiked(video) ? 'liked' : ''}`}
                    disabled={hasLiked(video)}
                  >
                    👍 {hasLiked(video) ? 'Liked' : 'Like'}
                  </button>
                  <span className="like-count">Likes: {video.likes || 0}</span>
                </div>
              </div>
            ))
          )}
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">Built by Zachary | © 2025 Bob The Plumber</p>
      </footer>
    </div>
  );
}

export default VideosPage;