import React from 'react';
import { FaUser, FaBriefcase, FaProjectDiagram,   FaTools, FaDownload } from 'react-icons/fa';




const Header = () => (
    <header>
      <nav className="navbar">
  <a href="#about"><FaUser size={40} title="About Me" /></a>
  <a href="#skills"><FaTools size={40} title="Skills" /></a>
  <a href="#work"><FaBriefcase size={40} title="Work Experience" /></a>
  <a href="#projects"><FaProjectDiagram size={40} title="Projects" /></a>
  <a href="#download"><FaDownload size={40} title="Download" /></a>
  
</nav>
    </header>
  );
  export default Header;
  