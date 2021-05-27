import React, { useState } from "react";
import ContactForm from "../Step4Contact/contactus";
import "./JourneyMapStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import Step1 from "./Step1/Step1";
import Congratulations from "../Questionnaire/Congratulations";
import Questionnaire from "../Questionnaire/Questionnaire";
import WelcomePage from "../WelcomePage/welcomePage";

// change

function JourneyMap() {
  // TODO: rename this
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [openQuestionnaire, setQuestionnaire] = useState(false);
  const questionnaireStep = () => {
    setQuestionnaire(!openQuestionnaire);
  };

  const [openCongratulationsPage, setCongratulationsPage] = useState(false);
  const congratulationsStep = () => {
    setCongratulationsPage(!openCongratulationsPage);
  };

  const [openContactForm, setContactForm] = useState(false);
  const contactStep = () => {
    setContactForm(!openContactForm);
  };

  const [welcomePageOpen, setwelcomePageOpen] = useState(true);
  const welcomePagePopup = () => {
    setwelcomePageOpen(false);
  };

  return (
    <Router>
      <div>
        <h1 className="title">
          YOUR JOURNEY
          <h6 className="subtitle">
            WHERE ARE YOU ON THE PATH OF DIGITAL INCLUSION?
          </h6>
        </h1>
      </div>
      <div className="page">
        <div className="stack">
          <div className="on-right">
            <div className="circles first" onClick={togglePopup}>
              <span className="instruction" onClick={togglePopup}>
                EXPLORE OUR PROGRAMS
              </span>
            </div>
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles second" onClick={questionnaireStep}>
              <span className="instruction" onClick={questionnaireStep}>
                SEE WHAT YOU ARE ELIGIBLE FOR
              </span>
            </div>
            <div className="popups">
              {openQuestionnaire && <Questionnaire />}
            </div>
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles third" onClick={congratulationsStep}>
              <span className="instruction" onClick={congratulationsStep}>
                LEARN MORE ABOUT THE GRANTEES
              </span>
            </div>
            <div className="popups">
              {openCongratulationsPage && <Congratulations />}
            </div>
          </div>
        </div>

        <div className="stack">
          <div className="on-right">
            <div className="circles fourth" onClick={contactStep}>
              <span className="instruction" onClick={contactStep}>
                ANY QUESTIONS?
              </span>
            </div>
            <div className="popups">{openContactForm && <ContactForm />}</div>
          </div>
        </div>
      </div>
      <div>{isOpen && <Step1 handleClose={togglePopup} />}</div>
      <div>
        {welcomePageOpen && <WelcomePage handleClose={welcomePagePopup} />}
      </div>
    </Router>
  );
}
export default JourneyMap;
