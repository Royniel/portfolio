import React from 'react';
import { FaUser, FaBriefcase, FaProjectDiagram,   FaTools, FaDownload } from 'react-icons/fa';




const Header = () => (
  <header>
    <nav className="navbar">
      <div>
        <a href="#about"><FaUser size={30} title="About Me" /></a>
        <a href="#about">About Me</a>
      </div>
      
      <div>
        <a href="#skills"><FaTools size={30} title="Skills" /></a>
        <a href="#skills">Skills</a>
      </div>
      
      <div>
        <a href="#work"><FaBriefcase size={30} title="Work Experience" /></a>
        <a href="#work">Work Experience</a>
      </div>
      
      <div>
        <a href="#projects"><FaProjectDiagram size={30} title="Projects" /></a>
        <a href="#projects">Projects</a>
      </div>
      
      {/* UPDATED RESUME SECTION */}
      <div>
        <a 
          href="https://drive.google.com/uc?export=download&id=1PGPOpWfq6vswHU11LS6a0jbfbfo9OQYE" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaDownload size={30} title="Download Resume" />
        </a>
        <a 
          href="https://drive.google.com/uc?export=download&id=1PGPOpWfq6vswHU11LS6a0jbfbfo9OQYE"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
      
    </nav>
  </header>
);
  export default Header;


  
  
  