
import Navbar from './components/Navbar';
import './App.css';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Certified from './components/Certified';

function App() {
  return (
      <div>
        <Navbar></Navbar>
        <Presentation></Presentation>
        <Skills></Skills>
        <Experience></Experience>
        <Certified></Certified>
        <Projects></Projects>
        <Contact></Contact>
      </div>
  )
}

export default App
