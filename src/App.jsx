import './App.css'
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Credits from './components/credits/Credits';

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Credits/>
      </div>
    </div>
  )
};

export default App;
