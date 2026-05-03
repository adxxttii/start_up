import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const projects = [
  {
    id: 1,
    title: 'Aikyam Ananda School',
    description: 'A beautiful and modern educational website showcasing dynamic events, school portfolio, and essential information featuring rich interactive elements.',
    tags: ['Web App', 'UI/UX', 'React'],
    link: 'https://aikyamanandaschool.vercel.app/'
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'A personal portfolio website showcasing projects, skills, and professional experience with modern web design.',
    tags: ['Portfolio', 'Web App'],
    link: 'https://portf-delta-plum.vercel.app/'
  },
  {
    id: 3,
    title: 'Food Waste Management',
    description: 'A web application dedicated to managing and reducing food waste efficiently with a user-friendly interface.',
    tags: ['Web App', 'Sustainability'],
    link: 'https://food-waste-management-topaz.vercel.app/'
  }
];

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-page">
      <div className="container">
        <div className="work-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-text"
          >
            Our Masterpieces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="subtitle"
          >
            Dive deeper into the projects that define our digital craftsmanship.
          </motion.p>
        </div>
        
        <div className="work-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="glass-panel project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="project-image-placeholder">
                {project.id === 1 ? 'Aikyam Ananda' : project.id === 2 ? 'Portfolio' : project.id === 3 ? 'Food Waste Mgmt' : `Project ${project.id}`}
              </div>
              <div className="project-info">
                <h3>
                  {project.link !== '#' ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{color: 'inherit'}}>
                      {project.title}
                    </a>
                  ) : project.title}
                </h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link !== '#' && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginTop: '24px', 
                      color: 'var(--accent-blue)', 
                      fontWeight: '600'
                    }}
                  >
                    View Website <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkPage
