import React from 'react';

const Education = () => {
  return (
    <section className="page-section" id="portfolio">
      <div className="section-title">
        <h2>EDUCATION</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="timeline">
        {/* Graduation */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <h3 className="timeline-title">B.Tech in Computer Science</h3>
          <p className="timeline-subtitle">Kuppam Engineering College | 2022 - 2026</p>
          <p className="timeline-text">
            Currently pursuing my undergraduate degree from the stream Computer Science and Engineering 
            <br/><strong>percentage: 83%</strong>
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <h3 className="timeline-title">Higher Secondary Education (12th Grade)</h3>
          <p className="timeline-subtitle">AP Model Junior College,Santhipuram | 2020 - 2022</p>
          <p className="timeline-text">
            Studied core sciences (Physics, Chemistry, Mathematics). 
            <br/><strong>Percentage: 76%</strong>
          </p>
        </div>

        {/* School */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <h3 className="timeline-title">Secondary Education (10th Grade)</h3>
          <p className="timeline-subtitle">AP Model School,Santhipuram | 2020</p>
          <p className="timeline-text">
            Completed foundational schooling with a strong emphasis on academics and extracurriculars.
            <br/><strong>Percentage: 100%</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;