import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
        </Routes>
      </Router>

      <Footer />

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
          <a href="https://github.com/Royniel" target="_blank" rel="noopener noreferrer" className="footer-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
        <div className="footer-right">
          <p>Follow me on:</p>
          <a href="https://github.com/Royniel" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github footer-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App;
