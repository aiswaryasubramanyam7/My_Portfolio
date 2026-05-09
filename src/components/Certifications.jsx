import React, { useState } from 'react';

const Certifications = () => {
  // This state holds the image path of the certificate currently being viewed
  // If it's null, the window is closed.
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="page-section" id="news">
      <div className="section-title">
        <h2>CERTIFICATIONS & INFO</h2>
        <div className="title-underline"></div>
      </div>

      <div className="grid-container">
        {/* Certificate 1 */}
        <div className="card">
          <h3>NPTEL Online Certification</h3>
          <p>Earned Certification on “Introduction to Environmental Economics”<br />
          • Scored: 66%</p>
          <button onClick={() => setSelectedCert('/NPTEL.jpeg')} className="action-btn">
            View Certificate
          </button>
        </div>
        
        {/* Certificate 2 */}
        <div className="card">
          <h3>Java Programming</h3>
          <p>Virtual Internship Certification from Codsoft on Successful completion and received a certificate from the company</p>
          <button onClick={() => setSelectedCert('/Codsoft.jpeg')} className="action-btn">
            View Certificate
          </button>
        </div>

        {/* Certificate 3 */}
        <div className="card">
          <h3>Python Programming</h3>
          <p>Participation of Workshop certification from APSCHE</p>
          <button onClick={() => setSelectedCert('/Apsche-Python.jpeg')} className="action-btn">
            View Certificate
          </button>
        </div>

        {/* Certificate 4 */}
        <div className="card">
          <h3>NCRICCT'26 certification</h3>
          <p>Participation certification of National Conference on "Recent trends in Information Communication and Computing Technology (NCRICCT'26)"</p>
          <button onClick={() => setSelectedCert('/NCRICCT.jpeg')} className="action-btn">
            View Certificate
          </button>
        </div>
      </div>

      {/* --- THE CERTIFICATE MODAL WINDOW --- */}
      {/* If selectedCert has a value, render this popup */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          {/* e.stopPropagation() prevents clicking INSIDE the window from closing it */}
          <div className="modal-content cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCert(null)}>&times;</button>
            <img src={selectedCert} alt="Certificate Document" className="cert-image" />
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;