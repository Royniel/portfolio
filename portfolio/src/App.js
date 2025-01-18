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

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi, I'm Nilanjan Roy. I am a web developer with a passion for
            creating beautiful and functional web applications.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1: [Some Java Project]</li>
            <li>Project 2: [Some React Project]</li>
            <li>Project 3: [Some React Project]</li>
            <li>Project 4: [Some React Project]</li>
            <li>Project 5: [Some React Project]</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 Nilanjan Roy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
