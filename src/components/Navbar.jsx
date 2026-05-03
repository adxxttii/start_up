import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <Rocket className="logo-icon" size={28} />
          <span className="logo-text">AB Digital <span className="gradient-accent">Solutions</span></span>
        </a>

        <div className="desktop-menu">
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#about" className="nav-link">About</a>
          <button className="primary-btn">Let's Talk</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu glass-panel"
          >
            <a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <button className="primary-btn mobile-cta">Let's Talk</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
