import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container" style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      <Contact />
    </div>
  );
};

export default ContactPage;
