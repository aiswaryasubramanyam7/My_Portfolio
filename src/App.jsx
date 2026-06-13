import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import AdditionalInfo from './components/AdditionalInfo';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div className="app-container">

        <aside className="sidebar">
          <div className="logo">
            <h1>WELCOME!</h1>
          </div>

          <ul className="nav-menu">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>HOME</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>ABOUT ME</NavLink></li>
            <li><NavLink to="/education" className={({ isActive }) => isActive ? "active-link" : ""}>EDUCATION</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>PROJECTS</NavLink></li>
            <li><NavLink to="/internships" className={({ isActive }) => isActive ? "active-link" : ""}>INTERNSHIPS</NavLink></li>
            <li><NavLink to="/certifications" className={({ isActive }) => isActive ? "active-link" : ""}>CERTIFICATIONS</NavLink></li>
            <li><NavLink to="/additional-info" className={({ isActive }) => isActive ? "active-link" : ""}>ADDITIONAL INFORMATION</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>CONTACT DETAILS</NavLink></li>
            <li><NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : ""}>SKILLS</NavLink></li>
          </ul>

         <div className="sidebar-footer">
          <hr />

          <div className="sidebar-action-buttons">

            <a href="https://forms.gle/UXGFphtUeW35R28B8" target="_blank" rel="noreferrer" className="sidebar-btn btn-hire">
              Hire Me
            </a>

            <a href="/Aiswarya_CV.pdf" target="_blank" rel="noreferrer" className="sidebar-btn btn-cv">
              Download CV
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px', verticalAlign: 'middle'}}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            </a>
            
          </div>

          <p className="copyright">
            © 2026 <br/>
            Copy rights
          </p>
        </div>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/additional-info" element={<AdditionalInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;