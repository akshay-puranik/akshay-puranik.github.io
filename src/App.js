import './App.css';
import About from './Components/About';
import Nabvar from './Components/Nabvar';
import TechStack from './Components/TechStack';

function App() {

  const handleInput = (e) => {
    console.log("pressed",e)
  }



  return (
    <>
      <Nabvar />
      <About />
      <TechStack/>
    </>
  );
}

export default App;
