// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import JourneyMap from "./screens/JourneyMap/JourneyMap";
import Step1 from "./screens/JourneyMap/Step1/Step1";
import Questionnaire from "./screens/Questionnaire/Questionnaire";
import Questionnaire2 from "./screens/Questionnaire/Questionnaire2";
import Questionnaire3 from "./screens/Questionnaire/Questionnaire3";
import Congratulations from "./screens/Questionnaire/Congratulations";

function App() {
  return (
    <div className="App">
      
      <Router>
      <JourneyMap />
      <Step1 />

      <div>
        <NavLink to='./questionnaire'>Questionnaire</NavLink>
        </div>
        <Switch>
            <Route path="/questionnaire">
              <Questionnaire />
            </Route>
            <Route path="/questionnaire2">
              <Questionnaire2 />
            </Route>
            <Route path="/questionnaire3">
              <Questionnaire3 />
            </Route>
            <Route path="/congratulations">
              <Congratulations />
            </Route>
          </Switch>
        </Router>
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
