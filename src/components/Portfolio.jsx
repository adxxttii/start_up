import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    title: 'Aikyam Ananda School',
    category: 'Educational Website',
    image: 'https://aikyamananda.netlify.app/images/Events/Graduation%20Day/graduation%20day%201.jpeg',
    description: 'A modern educational platform with dynamic event tracking and an interactive portfolio.',
    link: 'https://aikyamananda.netlify.app/'
  },
  {
    title: 'Personal Portfolio',
    category: 'Web Application',
    image: 'https://image.thum.io/get/width/800/crop/600/https://portf-delta-plum.vercel.app/',
    description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
    link: 'https://portf-delta-plum.vercel.app/'
  },
  {
    title: 'Food Waste Management',
    category: 'Sustainability App',
    image: 'https://image.thum.io/get/width/800/crop/600/https://food-waste-management-topaz.vercel.app/',
    description: 'A web application dedicated to managing and reducing food waste efficiently.',
    link: 'https://food-waste-management-topaz.vercel.app/'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge"
          >
            Our Work
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="portfolio-card glass-panel"
            >
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="primary-btn icon-btn view-btn">
                    Visit Website <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="portfolio-content">
                <p className="portfolio-category">{project.category}</p>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
