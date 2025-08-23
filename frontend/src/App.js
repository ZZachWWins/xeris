import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import XerisCoin from './components/XerisCoin';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="starry-background"></div>
        <div className="rotating-text-background">Xeris</div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/xeriscoin" element={<XerisCoin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;