import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';

// Import Video
import backgroundVideo from './assets/background.mp4'; // Ensure video is inside assets

function App() {
  return (
    <div className="App">
      {/* Full-Screen Banner Section with Video */}
      <div className="banner">
        <video autoPlay loop muted className="banner-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <h1 className="fade-in-text">"Crafting Code, Engineering Dreams."</h1>
        </div>
      </div>

      {/* About Me Section */}
      <section className="about-me">
        <div className="about-container">
          <div className="about-image">
            <img src="./assets/my.jpg" alt="Nilanjan Roy" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm <strong>Nilanjan Roy</strong>, a passionate Web Developer who specializes in creating elegant, efficient, and scalable applications.
              I have extensive experience in <strong>MongoDB, Express.js, React, and Node.js</strong>. My journey has taken me through diverse projects, 
              from **MVP startups** to **enterprise solutions**.
            </p>
          </div>
        </div>
      </section>

      {/* React Router Navigation */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
        </Routes>
      </Router>

      {/* Footer Section */}
      <Footer />
    </div>
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
