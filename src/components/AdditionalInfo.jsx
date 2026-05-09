import React from 'react';

const AdditionalInfo = () => {
  return (
    <section className="page-section">
      <div className="section-title">
        <h2>ADDITIONAL INFORMATION</h2>
        <div className="title-underline"></div>
      </div>
      <div className='AdditionalInfo'>

      <div className="card">
        <ul className="ss">
          <li><strong>Soft Skills:</strong> <br></br>• Positive attitude
          <br></br>• Adapted leadership style to meet diverse team needs <br></br>
          • Ability to work individually as well as in a team.<br></br>
          • Embracing change and adjusting to new situations and requirements</li>
        </ul>
      </div>
      <div className="card">
        <ul className="achievements">
          <li><strong>Achievements:</strong> <br></br>• 1st Runner Up at State Level CodeFest 2023</li>
        </ul>
      </div>

      <div className="card">
        <ul className="languages">
          <li><strong>Languages known:</strong><br></br>English (Fluent)<br></br> Telugu (Native)<br></br> Tamil (Conversational)</li>
        </ul>
      </div>

      <div className="card">
        <ul className="hobbies">
          <li><strong>Hobbies:</strong><br></br>Coding<br></br> Reading Tech Blogs<br></br>UI/UX Design</li>
        </ul>
      </div>
      </div> 
      
    </section>
  );
};

// THIS IS THE LINE THAT WAS MISSING!
export default AdditionalInfo;