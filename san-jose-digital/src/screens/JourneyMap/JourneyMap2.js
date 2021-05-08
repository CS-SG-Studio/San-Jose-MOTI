import React, { useState } from "react";
import Step1 from "./Step1/Step1.js";
import Step2 from "../Questionnaire/Questionnaire1";

import "./JourneyMapStyle.css";

const data = [
  { id: 1, step: "first", instruction: "EXPLORE OUR PROGRAMS", popup: "Step1" },
  { id: 2, step: "second", instruction: "SEE WHAT YOU ARE ELIGIBLE FOR", popup: "Step2" },
  { id: 3, step: "third", instruction: "LEARN MORE ABOUT THE GRANTEES", popup: "Step3" },
  { id: 4, step: "fourth", instruction: "STAY IN THE LOOP", popup: "Step4" },
];

function JourneyMap() {
  const [isOpen, setIsOpen] = useState(false);
  // to figure out what to popup
  const [value, setValue] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page">
      <div>
        <h1 className="header" style={{ fontSize: "4rem" }}>
          YOUR JOURNEY
        </h1>
        <h3 className="header" style={{ fontSize: "2.5rem" }}>
          WHERE ARE YOU ON THE PATH OF DIGITAL INCLUSION?
        </h3>
      </div>
      {data.map((stack) => {
        return (
          <div key={stack.id} className="stack">
            <div className="digit">{stack.id}</div>
            <div className="on-right" onClick={() => setValue(stack.popup)}>
              <div className={"circles " + stack.step} onClick={togglePopup}>
                <span className="instruction">{stack.instruction}</span>
              </div>
              <div className={"connector " + stack.step}></div>
            </div>
            {isOpen && value === "Step1" && <Step1 handleClose={togglePopup} />}
            {isOpen && value === "Step2" && <Step2 handleClose={togglePopup} />}
          </div>
        );
      })}
    </div>
  );
}
export default JourneyMap;
