import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './App.css';
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <Carousel fade interval={3000}>
        {/* Project 1 Slide */}
        <Carousel.Item onClick={() => navigate('/project1')} style={{ cursor: 'pointer' }}>
          <img className="d-block w-100" src={project1Image} alt="Project 1" />
          <Carousel.Caption>
            <h3>Project 1: Java Project</h3>
            <p>Click to see more about this Java project.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 2 Slide */}
        <Carousel.Item onClick={() => navigate('/project2')} style={{ cursor: 'pointer' }}>
          <img className="d-block w-100" src={project2Image} alt="Project 2" />
          <Carousel.Caption>
            <h3>Project 2: React Project</h3>
            <p>Click to see more about this React project.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
