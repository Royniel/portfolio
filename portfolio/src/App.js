import './App.css';
import background from './assets/background.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <h1>Welcome to My Portfolio</h1>
        <img src={background} alt="bakcground" className="App-background" />
      </header>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
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
