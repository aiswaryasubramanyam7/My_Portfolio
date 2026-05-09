import React from 'react';

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="section-title">
        <h2>CONTACT DETAILS</h2>
        <div className="title-underline"></div>
      </div>

      <div className="contact-container">
        <p>I am currently open to exciting new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        
        <div className="contact-links">
          <p><strong>Email:</strong> <a href="mailto:aiswaryasubramanyam7@gmail.com">aiswaryasubramanyam7@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 7675032641</p>
          <p><strong>LinkedIn:</strong> <a href="www.linkedin.com/in/aiswarya-s-226b232bb" target="_blank" rel="noreferrer">www.linkedin.com/in/aiswarya-s-226b232bb</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/aiswaryasubramanyam7" target="_blank" rel="noreferrer">https://github.com/aiswaryasubramanyam7</a></p>
        </div>
      </div>
    </section>
  );
};

// THIS IS THE CRUCIAL LINE YOU WERE LIKELY MISSING!
export default Contact;