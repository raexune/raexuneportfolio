import heroImage from "./images/fox.jpeg";
import mainLogo from "./images/raexune.png";
import ramona from "./images/ramonafuchs.jpg";

import Carousel from "./components/carousel.js";
import Gallery from "./components/gallery.js";
import './App.css';

function App() {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
  </div>
}


function Navbar() {
  return <header className = "navbar">
      <img src={mainLogo} alt="logo" />
      <div className = "navbar-links">
        <ul>
          <li><a href = "#">Home</a></li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Skills</a></li>
          <li><a href = "#">Projects</a></li>
          <li><a href = "#">Certifications</a></li>
          <li><a href = "#">Resume</a></li>
          <li><a href = "#">Contact</a></li>
        </ul>
      </div>
    </header>
}
function Hero() {
  return <div className = "hero">
    <div className = "hero-text">
      <h1>hello, i´m raexune</h1>
      <p>A Web Designer & Developer based in Vienna, Austria</p>
    </div>
    <img src={heroImage} alt="fox coding"/>
  </div>
}

function About(){
  return <div className = "about">
    <div className = "about-text">
      <h1>about me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <img src={ramona} alt="Ramona Fuchs"/>
  </div>
}

function Skills() {
  return <div>
          <h1 className="skills-heading">Skills</h1>
          <Carousel />;
        </div>
}

function Projects() {
  return <Gallery />;
}


export default App;


