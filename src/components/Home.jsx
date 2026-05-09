import React, { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-section">
      <div className="image-container">
        <div className="image-bg"></div>
        <div className="image-border"></div>
        <img src="/S.Aiswarya.jpeg" alt="Aiswarya" />
      </div>

      <div className="text-content">
        <h1>S.AISWARYA</h1>
        <p>
          Aspiring Full Stack Developer | AI & ML | Data Science Enthusiast<br/>
          B.Tech'26 Graduate
        </p>
        <div className="signature">
          Aiswarya
        </div>
      </div>

      
    </section>
  );
};

export default Home;