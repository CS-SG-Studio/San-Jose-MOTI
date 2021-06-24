import React, { useState } from "react";
import logo from "../../sjdi-logo.png";
import WelcomePage from "../WelcomePage/welcome";
import Program from "../Step1Program/program";
import Questionnaire from "../Step2Questionnaire/questionnaire";
import Congratulations from "../Step3Congrats/congrats";
import ContactForm from "../Step4Contact/contact";
import "./JourneyMapStyle.css";

function JourneyMap() {
  const [openPopup, setOpenPopup] = useState(false);
  const togglePopup = () => {
    // welcomeStep();
    setOpenPopup(!openPopup);
  };

  const [openQuestionnaire, setQuestionnaire] = useState(false);
  const questionnaireStep = () => {
    setQuestionnaire(!openQuestionnaire);
    setCongratulationsPage(false);
    // welcomeStep();
    // togglePopup();
  };

  const [openCongratulationsPage, setCongratulationsPage] = useState(false);
  const congratulationsStep = () => {
    // welcomeStep();
    setCongratulationsPage(!openCongratulationsPage);
  };

  const [openContactForm, setContactForm] = useState(false);
  const contactStep = () => {
    // welcomeStep();
    setContactForm(!openContactForm);
  };

  return (
    <>
      <div id="header">
        <a className="img" href="https://www.sjdigitalinclusion.org/" target="_blank" rel="noreferrer">
          <img id="logo" src={logo} alt="san jose digital inclusion logo" />
        </a>
      </div>

      <div className="welcome">
        <WelcomePage setContactForm={setContactForm} setPopup={setOpenPopup} />
      </div>
      <hr className="line" id="step1" />
      <div className="header">
        <h1 className="header-title">YOUR JOURNEY</h1>
        <h2 className="header-subtitle">
          WHERE ARE YOU ON THE PATH TO DIGITAL INCLUSION?
        </h2>
      </div>
      <div className="page">
        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={togglePopup}>
              <span className="instruction" onClick={togglePopup}>
                EXPLORE OUR PROGRAMS
              </span>
            </div>
            {openPopup && (
              <div className="pop">
                <Program handleClose={togglePopup} />
              </div>
            )}
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={questionnaireStep}>
              <span className="instruction" onClick={questionnaireStep}>
                FILL OUT ELIGIBILITY QUESTIONNAIRE
              </span>
            </div>
            {openQuestionnaire && (
              <div className="pop">
                <Questionnaire
                  setQuestionnaire={setQuestionnaire}
                  setCongratulationsPage={setCongratulationsPage}
                />
              </div>
            )}
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={congratulationsStep}>
              <span className="instruction" onClick={congratulationsStep}>
                LEARN MORE ABOUT THE GRANTEES
              </span>
            </div>
            {openCongratulationsPage && (
              <div className="pop">
                <Congratulations />
              </div>
            )}
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={contactStep}>
              <span className="instruction" id="step4" onClick={contactStep}>
                GET IN TOUCH WITH US
              </span>
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
