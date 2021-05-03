// import logo from './logo.svg';
import "./App.css";
import JourneyMap from "./screens/JourneyMap/JourneyMap";
import Step1 from "./screens/JourneyMap/Step1/Step1";
import Questionnaire from "./screens/Questionnaire/Questionnaire";

function App() {
  return (
    <div className="App">
      <JourneyMap />
      <Questionnaire />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
