// This second version of the journey map is more dynamically implemnted
// allowing for easier additions

import React, { useState } from "react";
import Welcome from "../WelcomePage/welcome";
import Step1Program from "../Step1Program/program";
import Step2Questionnaire from "../Step2Questionnaire/questionnaire";
import Step3Congrats from "../Step3Congrats/congrats";
import Step4Contact from "../Step4Contact/contact";
import logo from "../../sjdi-logo.png";

import "./JourneyMapStyle.css";

function JourneyMap() {
  const [openProgram, setProgram] = useState(false);
  const [openQuestionnaire, setQuestionnaire] = useState(false);
  const [openCongrats, setCongrats] = useState(false);
  const [openContactForm, setContactForm] = useState(false);

  const programStep = () => setProgram(!openProgram);
  const questionnaireStep = () => setQuestionnaire(!openQuestionnaire);
  const congratulationsStep = () => setCongrats(!openCongrats);
  const contactStep = () => setContactForm(!openContactForm);

  const data = [
    { id: 1, popup: programStep, instruction: "EXPLORE OUR PROGRAMS" },
    { id: 2, popup: questionnaireStep, instruction: "SEE WHAT YOU ARE ELIGIBLE FOR" },
    { id: 3, popup: congratulationsStep, instruction: "LEARN MORE ABOUT THE GRANTEES" },
    { id: 4, popup: contactStep, instruction: "STAY IN THE LOOP" },
  ];

  return (
    <>
      <div id="header">
        {/* SJIC Logo */}
        <a
          className="img"
          href="https://www.sjdigitalinclusion.org/"
          target="_blank"
          rel="noreferrer">
          <img id="logo" src={logo} alt="San José Digital Inclusion Fund logo" />
        </a>
      </div>

      <div className="welcome">
        <Welcome setContactForm={setContactForm} />
      </div>

      <hr className="line" id="begin-journey" />

      <div className="header">
        <h1 className="header-title">YOUR JOURNEY</h1>
        <h2>WHERE ARE YOU ON THE PATH TO DIGITAL INCLUSION?</h2>
      </div>

      {/* Every Circle */}
      <div className="page">
        {data.map((stack) => {
          return (
            <div key={stack.id} className="stack">
              <div className="on-right">
                <div className="circles" onClick={stack.popup}>
                  <span className="instruction">{stack.instruction}</span>
                </div>
                {/* Programs */}
                {openProgram && stack.id === 1 && (
                  <div className="pop">
                    <Step1Program />
                  </div>
                )}
                {/* Questionnaire */}
                {openQuestionnaire && stack.id === 2 && (
                  <div className="pop">
                    <Step2Questionnaire
                      setQuestionnaire={setQuestionnaire}
                      setCongrats={setCongrats}
                    />
                  </div>
                )}
                {/* Congrats */}
                {openCongrats && stack.id === 3 && (
                  <div className="pop">
                    <Step3Congrats />
                  </div>
                )}
                {/* Contact */}
                {openContactForm && stack.id === 4 && (
                  <div className="pop" id={"step4"}>
                    <Step4Contact />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default JourneyMap;
