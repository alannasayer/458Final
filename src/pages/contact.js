// src/pages/contact.js or contact.tsx
import React from 'react';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <div style={{
          backgroundColor: '#f0f0f0',
          padding: '40px',
          color: '#333',
          maxWidth: '800px',
          margin: '20px auto',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
        }}>
        <h1>Contact Us</h1>
        <p>If you have any questions, or you wish for a new sport to be added to the schedule, please feel free to reach out to us at OCkidssports@gmail.com</p>
        {/* Add your contact details or form here */}
      </div>
    </Layout>
  );
};

export default Contact;
