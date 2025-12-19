// Updated App.js
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
import Data from './components/Data'; 
import XerisSOL from './components/XerisSOL'; 
import TestnetBeta from './components/TestnetBeta'; 
import Terms from './components/Terms'; 
import BlockExplorer from './components/BlockExplorer'; // NEW: Import Block Explorer

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
            <Route path="/data" element={<Data />} /> 
            <Route path="/xerissol" element={<XerisSOL />} /> 
            <Route path="/testnet-beta" element={<TestnetBeta />} /> 
            <Route path="/terms" element={<Terms />} /> 
            <Route path="/explorer" element={<BlockExplorer />} /> {/* NEW: Route for Block Explorer */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;