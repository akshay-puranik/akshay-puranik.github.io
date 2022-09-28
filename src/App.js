import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Nabvar from './Components/Nabvar';
import Projects from './Components/Projects';
import Statistics from './Components/Statistics';
import TechStack from './Components/TechStack';

function App() {

  return (
    <>
      <Nabvar />
      <About />
      <TechStack />
      <Projects />
      <Statistics/>
      <Contact/>
    </>
  );
}

export default App;
