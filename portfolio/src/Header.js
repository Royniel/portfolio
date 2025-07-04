import React from 'react';
import { FaUser, FaBriefcase, FaProjectDiagram,   FaTools, FaDownload } from 'react-icons/fa';




const Header = () => (
    <header>
      <nav className="navbar">
  <div><a href="#about"><FaUser size={30} title="About Me" /></a>
  <a href="#about">About Me</a></div>
  <div>
  <a href="#skills"><FaTools size={30} title="Skills" /></a>
  <a href="#skills">Skills</a></div>
  <div>
  <a href="#work"><FaBriefcase size={30} title="Work Experience" /></a>
  <a href="#work">Work Experience</a></div>
  <div>
  <a href="#projects"><FaProjectDiagram size={30} title="Projects" /></a>
  <a href="#projects">Projects</a></div>
  <div>
  <a href="/NilanjanRoy_SDE.pdf" download>
  <FaDownload size={30} title="Download Resume" />
</a>
<a href="/NilanjanRoy_SDE.pdf" download>Download Resume</a>
</div>
  
</nav>
    </header>
  );
  export default Header;


  
  
  