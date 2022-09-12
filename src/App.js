import logo from './logo.svg';
import './App.css';

function App() {

  const handleInput = (e) => {
    console.log("pressed",e)
  }



  return (
    <div onKeyDown={e => handleInput(e)} className="App">
      <div>
        up
      </div>
      <div>
        <div>Left</div>
        <div>Down</div>
        <div>Right</div>
      </div>
    </div>
  );
}

export default App;
