import React from "react";
import "./welcomeStyles.css";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup">
      <h2>ARE YOU LOOKING FOR...</h2>
      <div className="looking-for">
        <div className="welcome-circle">
          <p className="welcome-circle-description">Low-Cost Internet Packages?</p>
        </div>
        <div className="welcome-circle">
          <p className="welcome-circle-description">Computer and Internet Lessons?</p>
        </div>
        <div className="welcome-circle">
          <p className="welcome-circle-description">Free Access to Digital Devices?</p>
        </div>
      </div>
      <h3 className="welcome-description">
        YES? You are in the right place! <br />
        <button
          className="button"
          // onClick={props.setPopup}
        >
          <a href="#step1" rel="noreferrer">
            <h3 className="startNow">CLICK HERE TO START YOUR JOURNEY</h3>
          </a>
        </button>
      </h3>
      <p className="welcome-description">
        NO? Scroll down to
        <a href="#step4" className="link" rel="noreferrer" onClick={props.setContactForm}>
          Step 4
        </a>
        to reach out to us with any questions.
      </p>
    </div>
  );
};

export default WelcomePage;
