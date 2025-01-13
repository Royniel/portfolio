import './App.css';
import logo from './assets/logo1.png'; // Import your logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Display the logo */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Portfolio</h1>
      </header>
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
