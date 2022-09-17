import './App.css';
import About from './Components/About';
import ContactMe from './Components/ContactMe';
import Nabvar from './Components/Nabvar';
import Projects from './Components/Projects';
import Statistics from './Components/Statistics';
import TechStack from './Components/TechStack';

function App() {

  const handleInput = (e) => {
    console.log("pressed",e)
  }



  return (
    <>
      <Nabvar />
      <About />
      <TechStack />
      <Projects />
      <Statistics/>
      <ContactMe/>
    </>
  );
}

export default App;
