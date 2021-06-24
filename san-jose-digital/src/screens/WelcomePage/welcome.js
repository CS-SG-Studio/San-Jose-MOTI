import React from "react";
import "./welcomeStyles.css";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup">
      <h2>
        ARE YOU LOOKING FOR...
        <h3 className="welcome-subtitle">
          Low-Cost Internet Packages, Computer and Internet Lessons, or Free Access to
          Digital Devices?
        </h3>
      </h2>
      <div className="choice">
        <a
          href="#step1"
          rel="noreferrer"
        >
          <button className="yes-button">
            <h3 className="yes-text">YES? CLICK HERE TO START YOUR JOURNEY</h3>
          </button>
        </a>
        <a
          href="#step4"
          rel="noreferrer"
          onClick={props.setContactForm}
        >
          <button className="no-button">
            <h3 className="no-text">
              NO? Click here to reach out to us with any questions
            </h3>
          </button>
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
