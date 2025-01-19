import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

// Importing images for work experience and projects (Replace with actual paths)
import experience1Image from './assets/velozi.webp';
import experience2Image from './assets/cynet.avif';
import experience3Image from './assets/mastech.webp';
import pathfinderImage from './assets/pathfinder.png';
import restroManagerImage from './assets/restromanager.png';
import stockOptimateImage from './assets/stockoptimate.png';
import hospitalImage from './assets/hospital.png';
import whiskerwagsImage from './assets/whiskerwags.png';

const Home = () => {
  const [expIndex, setExpIndex] = useState(0);
  const [projIndex, setProjIndex] = useState(0);
  const navigate = useNavigate();

  // Work Experience Slides
  const experienceSlides = [
    {
      image: experience1Image,
      title: 'Velozy - Frontend Developer',
      description: 'Refined the Velozy app using React Native, improved UX/UI and reduced app crashes by 15%.',
    },
    {
      image: experience2Image,
      title: 'Cynet Systems - Software Developer',
      description: 'Built a candidate data processing system with Spring Boot and MongoDB, reducing retrieval latency by 20%.',
    },
    {
      image: experience3Image,
      title: 'Mastech Digital - Software Developer',
      description: 'Developed full-stack system with Node.js, Spring Boot, and PostgreSQL, optimizing processing time by 20%.',
    },
  ];

  // Project Slides
  const projectSlides = [
    { image: pathfinderImage, title: 'Pathfinder', link: '/project1', description: 'Course selection web portal using Spring Boot and Hibernate.' },
    { image: restroManagerImage, title: 'RestroManager', link: '/project2', description: 'Standalone restaurant management app using Java and SQL.' },
    { image: stockOptimateImage, title: 'StockOptimate', link: '/project3', description: 'Stock management system with MSSQL, PowerBI, and Node.js.' },
    { image: hospitalImage, title: 'Hospital Admin', link: '/project4', description: 'Standalone hospital management app using Java and Swing API.' },
    { image: whiskerwagsImage, title: 'Whiskerwags', link: '/project5', description: 'Pet adoption portal using React, Node.js, and MongoDB.' },
  ];

  // Auto-slide effect for work experience
  useEffect(() => {
    const expTimer = setInterval(() => {
      setExpIndex((prevIndex) => (prevIndex + 1) % experienceSlides.length);
    }, 3000);
    return () => clearInterval(expTimer);
  }, [experienceSlides.length]);

  // Auto-slide effect for projects
  useEffect(() => {
    const projTimer = setInterval(() => {
      setProjIndex((prevIndex) => (prevIndex + 1) % projectSlides.length);
    }, 3000);
    return () => clearInterval(projTimer);
  }, [projectSlides.length]);

  return (
    <div className="Home">
      {/* Work Experience Section */}
      <h2>Work Experience</h2>
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={experienceSlides[expIndex].image} alt={experienceSlides[expIndex].title} />
          <div className="carousel-caption">
            <h3>{experienceSlides[expIndex].title}</h3>
            <p>{experienceSlides[expIndex].description}</p>
          </div>
        </div>
        <button className="carousel-button left" onClick={() => setExpIndex((expIndex - 1 + experienceSlides.length) % experienceSlides.length)}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={() => setExpIndex((expIndex + 1) % experienceSlides.length)}>
          &#10095;
        </button>
      </div>

      {/* Project Section */}
      <h2>Projects</h2>
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={projectSlides[projIndex].image} alt={projectSlides[projIndex].title} onClick={() => navigate(projectSlides[projIndex].link)} style={{ cursor: 'pointer' }} />
          <div className="carousel-caption">
            <h3>{projectSlides[projIndex].title}</h3>
            <p>{projectSlides[projIndex].description}</p>
          </div>
        </div>
        <button className="carousel-button left" onClick={() => setProjIndex((projIndex - 1 + projectSlides.length) % projectSlides.length)}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={() => setProjIndex((projIndex + 1) % projectSlides.length)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Home;
