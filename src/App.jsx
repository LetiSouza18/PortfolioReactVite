
import Navbar from './Navbar';
import './App.css';
import Presentation from './Presentation';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
      <div>
        <Navbar></Navbar>
        <Presentation></Presentation>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
  )
}

export default App
