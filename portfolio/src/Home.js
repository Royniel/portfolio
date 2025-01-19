import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

// Importing project and work experience images (Add your actual image paths)
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.png';
import experience1Image from './assets/velozy.webp'; 
import experience2Image from './assets/cynet.avif'; 
import experience3Image from './assets/mastech.webp'; 

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Work Experience Slides
  const experienceSlides = [
    {
      image: experience1Image,
      title: 'Velozy - Frontend Developer',
      description: 'Refined and debugged the Velozy app using React Native, improved UX/UI and reduced app crashes by 15%.',
    },
    {
      image: experience2Image,
      title: 'Cynet Systems - Software Developer',
      description: 'Developed a candidate data processing system using Spring Boot and MongoDB, reducing data retrieval latency by 20%.',
    },
    {
      image: experience3Image,
      title: 'Mastech Digital - Software Developer',
      description: 'Built a robust full-stack system using Node.js, Spring Boot, and PostgreSQL, reducing processing time by 20%.',
    },
  ];

  // Project Slides
  const projectSlides = [
    {
      image: project1Image,
      title: 'Pathfinder Project',
      link: '/project1',
      description: 'Course selection web portal built with Java, Microservices, and Hibernate.',
    },
    {
      image: project2Image,
      title: 'StockOptimate Project',
      link: '/project2',
      description: 'Stock management system using MSSQLServer, PowerBI, and Node.js.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [experienceSlides.length]);

  // Navigation functions for work experience slides
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experienceSlides.length) % experienceSlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceSlides.length);
  };

  return (
    <div className="Home">
      {/* Work Experience Carousel */}
      <h2>Work Experience</h2>
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={experienceSlides[currentIndex].image} alt={experienceSlides[currentIndex].title} />
          <div className="carousel-caption">
            <h3>{experienceSlides[currentIndex].title}</h3>
            <p>{experienceSlides[currentIndex].description}</p>
          </div>
        </div>
        <button className="carousel-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Project Carousel */}
      <h2>Projects</h2>
      <div className="carousel-container">
        {projectSlides.map((project, index) => (
          <div key={index} className="carousel-slide" onClick={() => navigate(project.link)} style={{ cursor: 'pointer' }}>
            <img src={project.image} alt={project.title} />
            <div className="carousel-caption">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
