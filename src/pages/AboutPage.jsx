import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Zap, Star, Sun, Lightbulb, TrendingUp } from 'lucide-react';
import '../components/Hero.css';
import '../components/WhyChooseUs.css';
import '../components/Services.css';
import '../components/Portfolio.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section - Matching Home Hero Layout */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-sphere sphere-1"></div>
          <div className="gradient-sphere sphere-2"></div>
        </div>
        
        <div className="hero-content" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="badge"
          >
            OUR STORY
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title"
          >
            We Build <span className="gradient-text">Beyond</span> <br/>
            Ordinary
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
            style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}
          >
            We are a collective of visionaries, engineers, and designers crafting premium digital experiences that redefine the future of software.
          </motion.p>
        </div>
      </section>

      {/* Mission Section - Matching Why Choose Us Layout */}
      <section className="why-choose-us">
        <div className="container wcu-container">
          
          {/* Left Side - Image Collage */}
          <div className="wcu-collage">
            <div className="collage-shape main-shape"></div>
            
            <div className="collage-img img-1">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team collaboration" />
            </div>
            
            <div className="collage-icon icon-1">
              <Sun size={32} />
            </div>

            <div className="collage-img img-2">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" alt="Leader" />
            </div>

            <div className="collage-shape side-shape"></div>

            <div className="collage-icon icon-2">
              <Sparkles size={36} />
            </div>

            <div className="collage-img img-3">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Architect" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="wcu-content">
            <h2 className="wcu-title">
              The <span className="serif-italic">Odysseus</span> Standard
            </h2>
            
            <p className="wcu-description">
              Born from a frustration with mediocre software, Odysseus was founded on a simple principle: digital tools should feel like magic. We combine rigorous engineering with uncompromising aesthetics.
            </p>

            <p className="wcu-highlight">
              We don't just write code. We architect solutions that scale, perform, and leave a lasting impression on every user who interacts with them.
            </p>

            <div className="wcu-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <TrendingUp size={36} />
                </div>
                <div className="feature-text">
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>10x</span><br/>
                  Performance
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Lightbulb size={36} />
                </div>
                <div className="feature-text">
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>0</span><br/>
                  Compromises
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Workflow Section - Matching Services Layout */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge"
            >
              PROCESS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              How We <span className="gradient-text">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-description"
            >
              A systematic approach to building the impossible.
            </motion.p>
          </div>

          <div className="services-grid">
            {[
              { icon: <Target className="service-icon" />, title: "Discovery & Strategy", desc: "We dive deep into your architecture, identifying bottlenecks and opportunities for massive scale." },
              { icon: <Zap className="service-icon" />, title: "Rapid Engineering", desc: "Using modern tech stacks, we build robust, high-performance systems with zero technical debt." },
              { icon: <Sparkles className="service-icon" />, title: "Polished Delivery", desc: "Every micro-interaction is refined. We don't ship until it feels like a premium product." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="service-card glass-panel"
              >
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Matching a clean section layout */}
      <section className="portfolio-section" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge"
            >
              TESTIMONIAL
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="service-card glass-panel"
            style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px', textAlign: 'center' }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '20px', color: 'var(--accent-pink)' }}>
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="service-desc" style={{ fontSize: '1.5rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
              "Working with Odysseus felt like skipping three years of technical debt. They didn't just build our platform; they defined our entire digital presence."
            </p>
            <div style={{ marginTop: '30px' }}>
              <h3 className="service-title" style={{ marginBottom: '5px' }}>Alex V.</h3>
              <p className="service-desc" style={{ fontSize: '0.9rem' }}>CTO, NextGen Finance</p>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default AboutPage;
