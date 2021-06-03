import React, { useState } from "react";
import logo from "../../sjdi-logo.png";
import WelcomePage from "../WelcomePage/welcomePage";
import Step1 from "../Step1Program/program";
import Questionnaire from "../Step2Questionnaire/Questionnaire";
import Congratulations from "../Step3Congrats/Congratulations";
import ContactForm from "../Step4Contact/contactus";
import "./JourneyMapStyle.css";

function JourneyMap() {
  const [openPoppup, setOpenPoppup] = useState(false);
  const togglePopup = () => {
    // welcomeStep();
    setOpenPoppup(!openPoppup);
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

  // const [openWelcomePage, setOpenWelcomePage] = useState(true);
  // const welcomeStep = () => {
  //   setOpenWelcomePage(false);
  // }
  
  return (
    <>
      <div className="menu">
        <a href="https://www.sjdigitalinclusion.org/" target="_blank" rel="noreferrer">
          <img src={logo} alt="san jose digital inclusion logo" />
        </a>
      </div>

      <div className="welcome">
        <WelcomePage
          setContactForm={setContactForm}
          setPoppup={setOpenPoppup}
        />

      </div>
      <hr className="line" id="step1" ></hr>
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
            {openPoppup && (
              <div className="pop">
                <Step1 handleClose={togglePopup} />
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
