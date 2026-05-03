import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <Layout className="service-icon" />,
    title: 'Custom Web Apps',
    description: 'We build highly scalable, interactive web applications tailored to your business workflows and goals.'
  },
  {
    icon: <Globe className="service-icon" />,
    title: 'Enterprise Software',
    description: 'Modernizing legacy systems and building robust enterprise solutions to drive operational efficiency.'
  },
  {
    icon: <ShieldCheck className="service-icon" />,
    title: 'Cloud & DevOps',
    description: 'Secure, resilient, and automated cloud infrastructure to keep your applications running 24/7.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            End-to-End <span className="gradient-text">Engineering</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            From concept to deployment, we cover the full software lifecycle with cutting-edge technologies and best practices.
          </motion.p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
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
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
