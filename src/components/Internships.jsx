import React, { useState } from 'react';

const Internships = () => {
  // Add the state to keep track of the selected internship certificate
  const [selectedIntern, setSelectedIntern] = useState(null);

  return (
    <section className="page-section" id="customers">
      <div className="section-title">
        <h2>INTERNSHIPS</h2>
        <div className="title-underline"></div>
      </div>

      <div className="grid-container">
        {/* Internship 1 */}
        <div className="card">
          <h3>Gen AI and IBM Cloud</h3>
          <p className="highlight-text">SmartBridge | May 2025</p>
          <p>Successfully completed a virtual short-term internship of 2 months on Generative AI with IBM cloud organized by SmartBridge Educational Service Pvt. ltd in collaboration with Andhra Pradesh State Council of Higher Education</p>
          <h5>Project</h5>
          <p>As a part of the internship, I worked on a project to create a SmartSDLC which automates key phases of the Software Development Life Cycle—requirements analysis, code generation, bug fixing, test creation, summarization, and real-time assistance—leveraging NLP and generative AI to speed up development, reduce manual work, and improve accuracy</p>
          
          {/* Replaced the <a> tag with a button that triggers the modal */}
          <button onClick={() => setSelectedIntern('/GENAI&IBMCloud.jpeg')} className="action-btn">
            View Certificate
          </button>
        </div>
        
        {/* Internship 2 */}
        <div className="card">
          <h3>MERN Stack Development</h3>
          <p className="highlight-text">SmartBridge | Jan 2026</p>
          <p>Successfully completed a virtual Long-term internship of 2 months on MERN STACK Development organized by SmartBridge Educational Service Pvt. ltd in collaboration with Andhra Pradesh State Council of Higher Education</p>
          <h5>Project</h5>
          <p>In the the internship, I worked on a project of FLight Booking App which is helps in knowing the flight details, Booking facility and more.</p>
          
          {/* Replaced the <a> tag with a button that triggers the modal */}
          <button onClick={() => setSelectedIntern('/FSD-certificate.jpeg')} className="action-btn">
            View Certificate
          </button>
        </div>
        
        {/* Internship 3 */}
        <div className="card">
          <h3>Software Developer Intern </h3>
          <p className="highlight-text">SHNOOR LLC | April 2026</p>
          <p>Worked as a Software developer intern for 2 months </p>
          <h5>Project</h5>
          <p>During the time of intern I am working on a project of Cyber threat detection using React for frontend, Node.js for backend and PostgreSQL for database. A dynamic project detects the anomaly threats of internal and external. Displays the threats, Filters and score in dashboard. Also has features of notifications, Auto-save, Bookmarks, and more</p>

          {/* Changed this to a span so it looks like a button but doesn't do anything when clicked */}
          <span className="action-btn" style={{ cursor: 'default', opacity: '0.8' }}>
            On Going
          </span>  
        </div>
      </div>
      
      {/* --- THE MODAL WINDOW --- */}
      {selectedIntern && (
        <div className="modal-overlay" onClick={() => setSelectedIntern(null)}>
          {/* Reusing the cert-modal CSS so you don't have to add anything to your index.css! */}
          <div className="modal-content cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedIntern(null)}>&times;</button>
            <img src={selectedIntern} alt="Internship Document" className="cert-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Internships;