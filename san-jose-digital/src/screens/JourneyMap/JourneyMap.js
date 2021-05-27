import React, { useState } from "react";
import ContactForm from "../LastStep/contactus";
import "./JourneyMapStyle.css";

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Step1 from "./Step1/Step1";
import Congratulations from "../Questionnaire/Congratulations";
import Questionnairee from "../Questionnaire/Questionnaire";
// change

function JourneyMap() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [openQuestionnaire, setQuestionnaire] = useState(false);

  const questionnaireStep = () => {
    setQuestionnaire(!openQuestionnaire);
  };

  const [openContactForm, setContactForm] = useState(false);

  const contactStep = () => {
    setContactForm(!openContactForm);
  };

  return (
    <Router>
      <div>
        <h1 className="title">
          YOUR JOURNEY
          <h6 className="subtitle">WHERE ARE YOU ON THE PATH OF DIGITAL INCLUSION?</h6>
        </h1>
      </div>

      <div className="page">
        <div className="stack">
          {/* <div className="digit">1</div> */}
          <div className="on-right">
            <div className="circles first" onClick={togglePopup}>
              <span className="instruction" onClick={togglePopup}>
                EXPLORE OUR PROGRAMS
              </span>
            </div>
            {/* <div className="connector first"></div> */}
          </div>
        </div>

        <div className="stack">
          {/* <div className="digit">2</div> */}
          <div className="on-right">
            <div className="circles second" onClick={questionnaireStep}>
              <span className="instruction" onClick={questionnaireStep}>
                <div>
                  <NavLink to="./Questionnaire">SEE WHAT YOU ARE ELIGIBLE FOR</NavLink>
                </div>
              </span>
            </div>
            {/* <div className="connector second1"></div> */}
            {openQuestionnaire && (
              <Switch>
                <Route path="/Questionnaire">
                  <Questionnairee />
                </Route>
              </Switch>
            )}

            {/* <div className="connector second2"></div> */}
          </div>
        </div>

        <div className="stack">
          {/* <div className="digit">3</div> */}
          <div className="on-right">
            <div className="circles third">
            wow
            <br />
            omg
            <br />
            omg
            <span className="instruction">LEARN MORE ABOUT THE GRANTEES</span>
            </div>
            {/* <div className="connector third"></div> */}
          </div>
        </div>

        <div className="stack">
          {/* <div className="digit">4</div> */}
          <div className="on-right">
            <div className="circles fourth" onClick={contactStep}>
              <span className="instruction" onClick={contactStep}>
                STAY IN THE LOOP
              </span>
            </div>
            {openContactForm && (
              <>
                <div className="connector fourth"></div>
                <ContactForm />
              </>
            )}
          </div>
        </div>
        {isOpen && <Step1 handleClose={togglePopup} />}
      </div>
    </Router>
  );
}
export default JourneyMap;
