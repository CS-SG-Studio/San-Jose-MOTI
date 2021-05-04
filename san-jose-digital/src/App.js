// import logo from './logo.svg';
import "./App.css";
import JourneyMap from "./screens/JourneyMap/JourneyMap";
import Step1 from "./screens/JourneyMap/Step1/Step1";
import Questionnaire1 from "./screens/Questionnaire/Questionnaire1";
import Questionnaire2 from "./screens/Questionnaire/Questionnaire2";
import Questionnaire3 from "./screens/Questionnaire/Questionnaire3";

function App() {
  return (
    <div className="App">
      {/* <JourneyMap /> */}
      {/* <Step1 /> */}
      <Questionnaire1 />
      <Questionnaire2 />
      <Questionnaire3 /> 
    </div>
  );
}

export default App;
