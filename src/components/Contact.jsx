import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title gradient-text"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            Ready to start your next project? Let's talk about how we can help you achieve your goals.
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info-cards"
          >
            <div className="info-card glass-panel interactive-card">
              <div className="info-icon-wrapper">
                <Mail className="info-icon" />
              </div>
              <div className="info-details">
                <h3>Email Us</h3>
                <p>hello@novatech.com</p>
                <p>support@novatech.com</p>
              </div>
            </div>

            <div className="info-card glass-panel interactive-card">
              <div className="info-icon-wrapper">
                <Phone className="info-icon" />
              </div>
              <div className="info-details">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="info-card glass-panel interactive-card">
              <div className="info-icon-wrapper">
                <MapPin className="info-icon" />
              </div>
              <div className="info-details">
                <h3>Visit Us</h3>
                <p>123 Innovation Drive</p>
                <p>Tech Valley, CA 94025</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-wrapper glass-panel"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  placeholder="How can we help?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Tell us about your project..."
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
