import './App.css';
import About from './Components/About';
import Nabvar from './Components/Nabvar';
import Projects from './Components/Projects';
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
      <Projects/>
    </>
  );
}

export default App;
