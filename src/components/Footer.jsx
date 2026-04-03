import React from 'react';
import { Rocket, MessageCircle, Users, Globe, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="about" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Rocket className="logo-icon" size={28} />
              <span className="logo-text">Nova<span className="gradient-accent">Tech</span></span>
            </a>
            <p className="footer-desc">
              We design and engineer enterprise-grade software products that enable startups and modern businesses to succeed in the digital era.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Users size={20} /></a>
              <a href="#" className="social-link"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Cloud Architecture</a></li>
              <li><a href="#">UI/UX Design</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Get in touch</h4>
            <p className="contact-info">
              Ready to transform your ideas into reality? Let's build something extraordinary together.
            </p>
            <button className="primary-btn icon-btn w-full">
              <Mail size={18} /> Contact Us
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NovaTech Solutions Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
