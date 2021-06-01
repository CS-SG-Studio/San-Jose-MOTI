import React, { useState } from "react";
import ContactForm from "../Step4Contact/contactus";
import "./JourneyMapStyle.css";
// import { BrowserRouter as Router } from "react-router-dom";
import Step1 from "../Step1Program/program";
import Congratulations from "../Step3Congrats/Congratulations";
import Questionnaire from "../Step2Questionnaire/Questionnaire";
import WelcomePage from "../WelcomePage/welcomePage";
import logo from "../../../src/sjdi-logo.png";

function JourneyMap() {
  const [openPoppup, setOpenPoppup] = useState(false);
  const togglePopup = () => {
    welcomeStep();
    setOpenPoppup(!openPoppup);
  };

  const [openQuestionnaire, setQuestionnaire] = useState(false);
  const questionnaireStep = () => {
    setQuestionnaire(!openQuestionnaire);
    setCongratulationsPage(false);
    welcomeStep();
    togglePopup();
  };

  const [openCongratulationsPage, setCongratulationsPage] = useState(false);
  const congratulationsStep = () => {
    welcomeStep();
    setCongratulationsPage(!openCongratulationsPage);
  };

  const [openContactForm, setContactForm] = useState(false);
  const contactStep = () => {
    welcomeStep();
    setContactForm(!openContactForm);
  };

  const [openWelcomePage, setOpenWelcomePage] = useState(true);
  const welcomeStep = () => {
    setOpenWelcomePage(false);
  };

  return (
    <>
      <div className="menu">
        <a href="https://www.sjdigitalinclusion.org/" target="_blank" rel="noreferrer">
          <img src={logo} alt="san jose digital inclusion logo" />
        </a>
      </div>
      <div className="welcome">
        {openWelcomePage && (
          <WelcomePage setContactForm={setContactForm} handleClose={welcomeStep} />
        )}
      </div>
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
            <div className="pop">{openPoppup && <Step1 handleClose={togglePopup} />}</div>
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={questionnaireStep}>
              <span className="instruction" onClick={questionnaireStep}>
                SEE WHAT YOU ARE ELIGIBLE FOR
              </span>
            </div>
            <div className="pop">
              {openQuestionnaire && (
                <Questionnaire
                  setQuestionnaire={setQuestionnaire}
                  setCongratulationsPage={setCongratulationsPage}
                />
              )}
            </div>
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={congratulationsStep}>
              <span className="instruction" onClick={congratulationsStep}>
                LEARN MORE ABOUT THE GRANTEES
              </span>
            </div>
            <div className="pop">{openCongratulationsPage && <Congratulations />}</div>
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles" onClick={contactStep}>
              <span className="instruction" id="step4" onClick={contactStep}>
                ANY QUESTIONS?
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
