import './App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import myImage from './assets/my.jpg';
import backgroundVideo from './assets/back.mp4';
import Header from './Header';
import {ReactTyped} from 'react-typed';


const theme = createTheme();


// rest of your imports...

function App() {
  const [nameToggle, setNameToggle] = useState(true); // Toggle between Nilanjan and Niel
  const [techIndex, setTechIndex] = useState(0);
  const techWords = ['Software', 'Fullstack', 'Front-end', 'Backend'];

  useEffect(() => {
    const nameInterval = setInterval(() => setNameToggle(prev => !prev), 2000);
    const techInterval = setInterval(() => setTechIndex(prev => (prev + 1) % techWords.length), 1500);
    return () => {
      clearInterval(nameInterval);
      clearInterval(techInterval);
    };
  }, [techWords.length]); // ✅ include dependency to satisfy ESLint


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {/* Fixed Video Background */}
          <div className="video-background">
            <video autoPlay loop muted className="video-content">
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>

          {/* Scrollable Content */}
          <div className="page-content">
            <Header />

            {/* Banner Content */}
            <div className="banner-content">
  <div className="banner-line">
    <h1 className="fade-in-text">
      Hi! This is{' '}
      <span className="gradient-text">
        <ReactTyped
          strings={['Nilanjan', 'a.k.a', 'Niel']}
          typeSpeed={60}
          backSpeed={40}
          loop
          showCursor={true}
          cursorChar="/>"
        />
      </span>
    </h1>
  </div>

  <div className="banner-line">
    <h1 className="fade-in-text">
      Welcome to my{' '}
      <span className="gradient-text">
        <ReactTyped
          strings={['Software', 'Fullstack', 'Front-end', 'Backend']}
          typeSpeed={60}
          backSpeed={40}
          loop
          showCursor={true}
          cursorChar="/>"
        />
      </span>{' '}
      Development Journey.
    </h1>
  </div>
</div>


            {/* About Me Section */}
            <section id ="about" className="about-me section-box">
              <div className="about-container">
                <div className="about-image">
                  <img src={myImage} alt="Nilanjan Roy" />
                </div>
                <div className="about-text">
                  <h2>About Me</h2>
                  <p>
                    Hi, this is <strong>Nilanjan Roy</strong>, a passionate Full Stack Developer who specializes in creating elegant, efficient, and scalable applications.
                    I have extensive experience in <strong>Java, JavaScript, Python, Springboot, Hibernate, MongoDB, Express.js, React, and Node.js. 
                    I am also currently unveiling the mysteries of Gen AI Development.</strong> My journey has taken me through diverse projects, 
                    from <strong>MVP startups</strong> to <strong>enterprise solutions</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* React Router Navigation */}
            <Routes>
              
              <Route path="/project1" element={<Project1 />} />
              <Route path="/project2" element={<Project2 />} />
              <Route path="/project3" element={<Project3 />} />
              <Route path="/project4" element={<Project4 />} />
              <Route path="/project5" element={<Project5 />} />
            </Routes>
            <Home />
            {/* Footer Section */}
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

/* Footer Component */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Nilanjan Roy. All Rights Reserved.</p>
        </div>
        <div className="footer-center">
          <a href="mailto:roy.nil@northeastern.edu" className="footer-link">
            <i className="fas fa-envelope"></i> roy.nil@northeastern.edu
          </a><br></br>
          <a href="mailto:royniel08@gmail.com" className="footer-link">
            <i className="fas fa-envelope"></i> royniel08@gmail.com
          </a>
        </div>
        <div className="footer-right">
          <p>Follow my work on:</p>
          <div className="social-icons">
            <a href="https://github.com/Royniel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github footer-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/nilanjan-roy-619535147/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin footer-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};




export default App;
