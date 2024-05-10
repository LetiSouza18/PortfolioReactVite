
import Navbar from './Navbar';
import './App.css';
import Presentation from './Presentation';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';
import Certified from './Certified';

function App() {
  return (
      <div>
        <Navbar></Navbar>
        <Presentation></Presentation>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Certified></Certified>
        <Contact></Contact>
      </div>
  )
}

export default App
