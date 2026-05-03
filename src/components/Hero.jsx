import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="badge"
        >
          Elevating Digital Experiences
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-title"
        >
          We Build <span className="gradient-text">World-Class</span> <br/>
          Software Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Transform your business with cutting-edge web and mobile applications designed to scale, engage, and drive unprecedented growth.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-actions"
        >
          <Link to="/contact" className="primary-btn lg icon-btn">
            Start Your Project <ArrowRight size={20} />
          </Link>
          <Link to="/work" className="secondary-btn lg">
            View Our Work
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hero-stats glass-panel"
      >
        <div className="stat-item">
          <Code className="stat-icon" />
          <div>
            <h3 className="stat-value">2</h3>
            <p className="stat-label">Web Apps Delivered</p>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <Users className="stat-icon" />
          <div>
            <h3 className="stat-value">8+</h3>
            <p className="stat-label">Satisfied Clients</p>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <Cloud className="stat-icon" />
          <div>
            <h3 className="stat-value">99.9%</h3>
            <p className="stat-label">Uptime Delivered</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
