import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';

function App() {
  return (
    <div className="App">
      {/* Banner Section */}
      <div className="banner">
        <h1>Welcome to My Portfolio</h1>
      </div>

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

      <Footer/>
    </div>
  );
}
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
          <p>Follow my work on:
          <a href="https://github.com/Royniel" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github footer-icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/nilanjan-roy-619535147/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin footer-icon"></i>
          </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
