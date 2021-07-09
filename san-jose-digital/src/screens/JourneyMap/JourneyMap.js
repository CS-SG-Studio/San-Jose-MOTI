import React, { useState } from "react";
import logo from "../../sjdi-logo.png";
import Welcome from "../WelcomePage/welcome";
import Program from "../Step1Program/program";
import Questionnaire from "../Step2Questionnaire/Questionnaire";
import Congratulations from "../Step3Congrats/congrats";
import ContactForm from "../Step4Contact/contact";
import "./JourneyMapStyle.css";

function JourneyMap() {
  // Opens Programs from Welcome Page
  const [openProgram, setProgram] = useState(false);
  const programStep = () => {
    setProgram(!openProgram);
  };

  // Opens Contact Form from Welcome page
  const [openContactForm, setContactForm] = useState(false);
  const contactStep = () => {
    setContactForm(!openContactForm);
  };

  // Questionnaire - close congratulations page everytime step2 is clicked
  const [openQuestionnaire, setQuestionnaire] = useState(false);
  const questionnaireStep = () => {
    setQuestionnaire(!openQuestionnaire);
    setCongrats(false);
  };

  const [openCongrats, setCongrats] = useState(false);
  const congratulationsStep = () => {
    setCongrats(!openCongrats);
  };

  return (
    <>
      <div id="header">
        <a
          className="img"
          href="https://www.sjdigitalinclusion.org/"
          target="_blank"
          rel="noreferrer">
          <img id="logo" src={logo} alt="San José Digital Inclusion Fund logo" />
        </a>
      </div>

      <div className="welcome">
        <Welcome setContactForm={setContactForm} setPopup={setProgram} />
      </div>

      <hr className="line" id="begin-journey" />

      <div className="header">
        <h1 className="header-title">YOUR JOURNEY</h1>
        <h2>WHERE ARE YOU ON THE PATH TO DIGITAL INCLUSION?</h2>
      </div>

      <div className="page">
        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={programStep}>
              <span className="instruction">EXPLORE OUR PROGRAMS</span>
            </div>
            {openProgram && (
              <div className="pop">
                <Program />
              </div>
            )}
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={questionnaireStep}>
              <span className="instruction">FILL OUT ELIGIBILITY QUESTIONNAIRE</span>
            </div>
            {openQuestionnaire && (
              <div className="pop">
                <Questionnaire
                  setQuestionnaire={setQuestionnaire}
                  setCongrats={setCongrats}
                />
              </div>
            )}
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={congratulationsStep}>
              <span className="instruction">LEARN MORE ABOUT THE GRANTEES</span>
            </div>
            {openCongrats && (
              <div className="pop">
                <Congratulations />
              </div>
            )}
          </div>
        </div>

        <div className="stack" id="step4">
          <div className="on-right">
            <div className="circles" onClick={contactStep}>
              <span className="instruction">GET IN TOUCH WITH US</span>
            </div>
            {openContactForm && (
              <div className="pop">
                <ContactForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default JourneyMap;
