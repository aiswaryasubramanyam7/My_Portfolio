import React from 'react';

const Projects = () => {
  return (
    <section className="page-section" id="services">
      <div className="section-title">
        <h2>PROJECTS</h2>
        <div className="title-underline"></div>
      </div>

      <div className="grid-container">
        <div className="card">
          <h3>Interactive Quiz Application</h3>
          <p className="highlight-text">Core Java Application</p>
          <p><strong>Tech Stack:</strong> Core Java, Object-Oriented Programming (OOP)</p>
          <p><strong>Overview:</strong> A fully featured, logic-driven trivia game demonstrating strong foundational knowledge of Java and state management.</p>
          <p><strong>How it Works:</strong> The application guides users through a structured instruction phase before presenting a randomized set of questions. It features complex game logic, including the implementation of dynamic "lifelines" (Audience Poll and 50/50), which require precise array manipulation and conditional rendering to update the game state in real-time before calculating the final score.</p>
          <a href="https://github.com/yourusername/java-quiz" target="_blank" rel="noreferrer" className="action-btn">
            View Live Project
          </a>
        </div>
        <div className="card">
          <h3>Dice Challenge Game</h3>
          <p className="highlight-text">Frontend Web Game</p>
          <p><strong>Tech Stack:</strong> JavaScript, HTML5, CSS3</p>
          <p><strong>Overview:</strong> A lightweight, responsive, local multiplayer web game built to showcase direct Document Object Model (DOM) manipulation and pseudo-random number generation.</p>
          <p><strong>How it Works:</strong> The application utilizes JavaScript's Math library to simulate randomized dice rolls for two players simultaneously. It immediately updates the UI with the corresponding dice face images and executes conditional logic to determine and declare the winner or a draw, ensuring a seamless and instant interactive experience.</p>
          <a href="https://github.com/yourusername/dice-challenge" target="_blank" rel="noreferrer" className="action-btn">
            View Live Project
          </a>
        </div>
        <div className="card">
          <h3>Animal Emotion Detector</h3>
          <p className="highlight-text">IoT & Machine Learning System</p>
          <p><strong>Tech Stack:</strong> Python, Machine Learning Algorithms, IoT Sensors</p>
          <p><strong>Overview:</strong> A predictive safety and behavioral analysis system that interprets the emotional states of animals to prevent human-wildlife conflicts.</p>
          <p><strong>How it Works:</strong> The system utilizes IoT sensors to capture real-time environmental and behavioral data, feeding it into trained Machine Learning models to classify the animal's emotional state (e.g., aggressive, calm, distressed). If a threat is detected, the system immediately generates and transmits early-warning signals to nearby humans, effectively bridging the gap between wildlife conservation and public safety.</p>
          <a href="https://github.com/yourusername/animal-emotion" target="_blank" rel="noreferrer" className="action-btn">
            View Live Project
          </a>
        </div>
        <div className="card">
          <h3>SmartSDLC</h3>
          <p className="highlight-text">AI-Powered Development Assistant</p>
          <p><strong>Tech Stack:</strong> Generative AI, NLP, Large Language Models (LLMs)</p>
          <p><strong>Overview:</strong> An intelligent automation tool designed to accelerate and optimize key phases of the Software Development Life Cycle (SDLC) using advanced Natural Language Processing.</p>
          <p><strong>How it Works:</strong> SmartSDLC acts as a virtual engineering assistant. By leveraging Generative AI, it automatically parses requirements, generates boilerplate code, identifies and fixes bugs, and drafts unit tests. This significantly reduces manual overhead, minimizes human error, and provides real-time, context-aware assistance to developers throughout the entire production pipeline.</p>
          <a href="https://github.com/yourusername/smart-sdlc" target="_blank" rel="noreferrer" className="action-btn">
            View Live Project
          </a>
        </div>        
        <div className="card">
          <h3>SkyGlide Flight Booking App</h3>
          <p className="highlight-text">Full-Stack MERN Application</p>
          <p><strong>Tech Stack:</strong> MongoDB, Express.js, React (Vite), Node.js</p>
          <p><strong>Overview:</strong> A comprehensive flight reservation platform offering users a seamless experience for searching, comparing, and booking flights.</p>
          <p><strong>How it Works:</strong> Built entirely on the MERN stack, the React frontend delivers a highly responsive user interface for browsing flight details and managing passenger bookings. The Node.js and Express backend handles secure API routing, CORS, and data proxying, connecting to a MongoDB database to efficiently manage user profiles, complex flight schedules, and reservation statuses in real-time.</p>
          <a href="https://github.com/yourusername/skyglide" target="_blank" rel="noreferrer" className="action-btn">
            View Live Project
          </a>
        </div>
        <div className="card">
          <h3>RAG-Powered AgriBot</h3>
          <p className="highlight-text">Multi-Agent AI Chatbot</p>
          <p><strong>Tech Stack:</strong> Python, LLMs, Retrieval-Augmented Generation (RAG), Vector DB</p>
          <p><strong>Overview:</strong> An intelligent conversational agent designed to provide accurate, context-aware agricultural diagnostics and advice without relying on standard image classification models.</p>
          <p><strong>How it Works:</strong> The system is built utilizing a multi-agent architecture (incorporating specialized agents like a Curriculum Agent and Diagnostic Agent) to handle complex, domain-specific queries. It leverages Retrieval-Augmented Generation to dynamically fetch up-to-date agricultural data before generating responses, ensuring high factual accuracy. The system's performance is strictly evaluated and continuously monitored using RAGAS metrics to guarantee faithfulness and answer relevancy.</p>
          <a href="https://github.com/yourusername/agribot" target="_blank" rel="noreferrer" className="action-btn">
            View Live Project
          </a>
        </div>
        <div className="card">
          <h3>Cyber AI Threat Detection</h3>
          <p className="highlight-text">Security Dashboard & Monitoring System</p>
          <p><strong>Tech Stack:</strong> React, Node.js, PostgreSQL</p>
          <p><strong>Overview:</strong> A dynamic cybersecurity dashboard designed to detect, display, and manage internal and external anomaly threats in real-time.</p>
          <p><strong>How it Works:</strong> The backend utilizes Node.js and PostgreSQL to manage and process threat data, featuring specialized modules like an InsiderMonitor, InjectTraffic, and a SmartAlert system. The React frontend serves as a comprehensive control panel where administrators can view threat scores and apply complex dashboard filters (such as date, severity, and IP address) to isolate specific issues. To ensure strict operational security, the UI also features an automatic idle timeout warning system.</p>
          <a href="https://github.com/yourusername/cyber-ai" target="_blank" rel="noreferrer" className="action-btn">
            View Live Project
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;