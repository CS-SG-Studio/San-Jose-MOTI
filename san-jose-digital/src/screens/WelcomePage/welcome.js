import React from "react";
import "./welcomeStyles.css";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup">
      <h2>
        ARE YOU LOOKING FOR...
        <p className="welcome-subtitle">
          Low-Cost Internet Packages, Computer and Internet Lessons, or Free Access to
          Digital Devices?
        </p>
      </h2>

      <div className="choice">
        <a href="#step1" rel="noreferrer">
          <button className="yes-button">
            <p className="yes-text">YES? Click here to start your journey</p>
          </button>
        </a>
        <a href="#step4" rel="noreferrer" onClick={props.setContactForm}>
          <button className="no-button">
            <p className="no-text">
              NO? Click here to reach out to us with any questions
            </p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
