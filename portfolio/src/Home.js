import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.png';
import './App.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { image: project1Image, title: 'Project 1: Java Project', link: '/project1' },
    { image: project2Image, title: 'Project 2: React Project', link: '/project2' },
  ];

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigate to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Navigate to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="Home">
      <div className="carousel-container">
        <div className="carousel-slide">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            onClick={() => navigate(slides[currentIndex].link)}
            style={{ cursor: 'pointer' }}
          />
          <div className="carousel-caption">
            <h3>{slides[currentIndex].title}</h3>
          </div>
        </div>
        <button className="carousel-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Home;
