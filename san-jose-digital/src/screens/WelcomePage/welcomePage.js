import React from "react";
import "./welcomePage.css";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup">
      <div className="centering">
        <div className="header">
          <h1 className="steptitle">ARE YOU LOOKING FOR</h1>
        </div>

        <div className="threecircles">
          <div className="circle first">
            <h1 className="description">LOW-COST INTERNET PACKAGES?</h1>
          </div>
          
          <div className="circle second">
            <h1 className="description">COMPUTER AND INTERNET LESSONS?</h1>
          </div>
          <div className="circle third">
            <h1 className="description">FREE ACCESS TO DIGITAL DEVICES?</h1>
          </div>
        </div>
        <br />
        <h2 className="steptitle2">
          YES? THEN YOU ARE IN THE RIGHT PLACE! <br />
          START YOUR JOURNEY AND FOLLOW THE STEPS
        </h2>
        <button onClick={props.handleClose}> START NOW! </button>
        <h4 className="description second">
          No? Then, are you looking for funding, mentorship, collaboration, or
          volunteering
          <br />
          opportunities or ways to donate to impactful digital inclusion
          programs? <br/>
        <a href="https://www.sjdigitalinclusion.org/">VISIT OUR WEBSITE!</a>
          If not, scroll down to the last step and reach out!
        </h4>
      </div>
    </div>
  );
};

export default WelcomePage;
