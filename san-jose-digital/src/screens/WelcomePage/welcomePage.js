import React from "react";
import "./welcomePage.css";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup">
      <h2 className="welcometitle">ARE YOU LOOKING FOR...</h2>
      <div className="lookingfor">
        <div className="welcome-circle">
          <p className="welcome-description">Low-Cost Internet Packages?</p>
        </div>
        <div className="welcome-circle">
          <p className="welcome-description">
            Computer <br /> and Internet Lessons?
          </p>
        </div>
        <div className="welcome-circle">
          <p className="welcome-description">Free Access to Digital Devices?</p>
        </div>
      </div>
      <br />
      <h3 className="welcometitle two">
        YES? You are in the right place! <br />
        <button className="button" onClick={props.handleClose}>
          <a
            href="#step1"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3 className="startNow">CLICK HERE TO START YOUR JOURNEY</h3>
          </a>
        </button>
      </h3>
      <h3 className="welcometitle two">
        NO? Scroll down to
        <a href="#step4" className="link" rel="noreferrer" onClick={props.setContactForm}>
          Step 4
        </a>
        to reach out to us with any questions!
      </h3>
    </div>
  );
};

export default WelcomePage;
