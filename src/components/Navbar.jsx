import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path, hash) => {
    if (hash) {
      return location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  };

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
          <span className="logo-text">Odysseus</span>
        </a>

        <div className="desktop-menu">
          <Link to="/" className={`nav-link ${isActive('/', '') ? 'active' : ''}`}>Home</Link>
          <a href="/#services" className={`nav-link ${isActive('/', '#services') ? 'active' : ''}`}>Services</a>
          <a href="/#portfolio" className={`nav-link ${isActive('/', '#portfolio') ? 'active' : ''}`}>Portfolio</a>
          <a href="/#about" className={`nav-link ${isActive('/', '#about') ? 'active' : ''}`}>About</a>
          <a href="/#contact" className={`nav-link ${isActive('/', '#contact') ? 'active' : ''}`}>Contact</a>
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
            <Link to="/" className={`mobile-nav-link ${isActive('/', '') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="/#services" className={`mobile-nav-link ${isActive('/', '#services') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/#portfolio" className={`mobile-nav-link ${isActive('/', '#portfolio') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="/#about" className={`mobile-nav-link ${isActive('/', '#about') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/#contact" className={`mobile-nav-link ${isActive('/', '#contact') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
