import React from 'react';
import { FaUser, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';




const Header = () => (
    <header>
      <nav className="navbar">
  <a href="#about"><FaUser size={22} title="About Me" /></a>
  <a href="#work"><FaBriefcase size={22} title="Work Experience" /></a>
  <a href="#projects"><FaProjectDiagram size={22} title="Projects" /></a>
  <a href="#skills"><i className="fas fa-tools" title="Skills"></i></a>
</nav>
    </header>
  );
  export default Header;
  