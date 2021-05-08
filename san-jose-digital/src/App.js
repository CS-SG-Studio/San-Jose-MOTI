// import logo from './logo.svg';
import "./App.css";
import JourneyMap from "./screens/JourneyMap/JourneyMap";
import JourneyMap2 from "./screens/JourneyMap/JourneyMap2";
import Questionnaire1 from "./screens/Questionnaire/Questionnaire1";
// import Questionnaire2 from "./screens/Questionnaire/Questionnaire2";
// import Questionnaire3 from "./screens/Questionnaire/Questionnaire3";

function App() {
  return (
    <div className="App">
      <JourneyMap />
      <JourneyMap2 />
      <Questionnaire1 />
    </div>
  );
}

export default App;
