import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiMongodb, SiJavascript } from 'react-icons/si';


// Importing images for work experience and projects
import experience1Image from './assets/velozi.webp';
import experience2Image from './assets/cynet.avif';
import experience3Image from './assets/mastech.webp';
import pathfinderImage from './assets/pathfinder.png';
import restroManagerImage from './assets/restromanager.png';
import stockOptimateImage from './assets/stockoptimate.png';
import hospitalImage from './assets/hospital.png';
import whiskerwagsImage from './assets/wiskerwags.png';

const Home = () => {
  const navigate = useNavigate();
  const [expIndex, setExpIndex] = useState(0);
  const [projIndex, setProjIndex] = useState(0);

  const experienceSlides = [
    { image: experience1Image, title: 'Velozy - Frontend Developer', description: 'Refined the Velozy app using React Native with Expo, improved UX/UI and reduced app crashes by 15%.' },
    { image: experience2Image, title: 'Cynet Systems - Software Developer', description: 'Built a candidate data processing system with Spring Boot, Hibernate and MongoDB, reducing retrieval latency by 20%.' },
    { image: experience3Image, title: 'Mastech Digital - Software Developer', description: 'Developed full-stack system with Node.js, Spring Boot, and PostgreSQL, optimizing processing time by 20%.' },
  ];

  const projectSlides = [
    { image: pathfinderImage, title: 'Pathfinder', link: '/project1', description: 'Course selection web portal using Spring Boot and Hibernate.' },
    { image: restroManagerImage, title: 'RestroManager', link: '/project2', description: 'Standalone restaurant management app using Java and SQL.' },
    { image: stockOptimateImage, title: 'StockOptimate', link: '/project3', description: 'Stock management system with MSSQL, PowerBI, and Node.js.' },
    { image: hospitalImage, title: 'Hospital Admin', link: '/project4', description: 'Standalone hospital management app using Java and Swing API.' },
    { image: whiskerwagsImage, title: 'Whiskerwags', link: '/project5', description: 'Pet adoption portal using React, Node.js, and MongoDB.' },
  ];

  useEffect(() => {
    const expTimer = setInterval(() => {
      setExpIndex((prev) => (prev + 1) % experienceSlides.length);
    }, 3000);
    return () => clearInterval(expTimer);
  }, []);

  useEffect(() => {
    const projTimer = setInterval(() => {
      setProjIndex((prev) => (prev + 1) % projectSlides.length);
    }, 3000);
    return () => clearInterval(projTimer);
  }, []);

  return (

    <><div id="skills" className="section-box">
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-icons">
          <FaJava title="Java" size={40} />
          <FaPython title="Python" size={40} />
          <SiC title="C" size={40} />
          <SiCplusplus title="C++" size={40} />
          <FaDatabase title="SQL" size={40} />
          <SiMysql title="MySQL" size={40} />
          <SiMongodb title="MongoDB" size={40} />
          <SiJavascript title="JavaScript" size={40} />
          <FaReact title="React" size={40} />
          <FaNodeJs title="Node.js" size={40} />
        </div>
      </div>
    </div><>
    
    <div id="work" className="section-box">
      {/* Work Experience Section */}
      <div className="carousel-section">
        <h2>Work Experience</h2>
        <div className="carousel-container work-experience">
          <div className="carousel-slide">
            <img src={experienceSlides[expIndex].image} alt={experienceSlides[expIndex].title} />
            <IconButton className="nav-button left" onClick={() => setExpIndex((expIndex - 1 + experienceSlides.length) % experienceSlides.length)}>
              <ArrowBackIos />
            </IconButton>
            <IconButton className="nav-button right" onClick={() => setExpIndex((expIndex + 1) % experienceSlides.length)}>
              <ArrowForwardIos />
            </IconButton>
          </div>
          <div className="carousel-caption right-text">
            <h3>{experienceSlides[expIndex].title}</h3>
            <p>{experienceSlides[expIndex].description}</p>
          </div>
        </div>
      </div>
    </div>

        {/* Projects Section */}
        <div id="projects" className="section-box">
          <div className="carousel-section">
            <h2>Projects</h2>
            <div className="carousel-container projects">
              <div className="carousel-slide" onClick={() => navigate(projectSlides[projIndex].link)} style={{ cursor: 'pointer' }}>
                <img src={projectSlides[projIndex].image} alt={projectSlides[projIndex].title} />
                <IconButton className="nav-button left" onClick={(e) => { e.stopPropagation(); setProjIndex((projIndex - 1 + projectSlides.length) % projectSlides.length); } }>
                  <ArrowBackIos />
                </IconButton>
                <IconButton className="nav-button right" onClick={(e) => { e.stopPropagation(); setProjIndex((projIndex + 1) % projectSlides.length); } }>
                  <ArrowForwardIos />
                </IconButton>
              </div>
              <div className="carousel-caption left-text">
                <h3>{projectSlides[projIndex].title}</h3>
                <p>{projectSlides[projIndex].description}</p>
              </div>
            </div>
          </div>
        </div></></>
  );
};

export default Home;