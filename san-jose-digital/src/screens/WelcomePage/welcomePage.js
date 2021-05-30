import React from "react";
import "./welcomePage.css";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup unblurred" id="unblurred">
      <div className="centering">
        <div className="header">
          <h1 className="steptitle">ARE YOU LOOKING FOR</h1>
        </div>

        <div className="threecircles">
          <div className="circle">
            <h1 className="description">LOW-COST INTERNET PACKAGES?</h1>
          </div>
          
          <div className="circle">
            <h1 className="description">COMPUTER AND INTERNET LESSONS?</h1>
          </div>
          <div className="circle">
            <h1 className="description">FREE ACCESS TO DIGITAL DEVICES?</h1>
          </div>
        </div>
        <br />
        <h2 className="steptitle2">
          YES? THEN YOU ARE IN THE RIGHT PLACE! <br />
          START YOUR JOURNEY BY FOLLOWING THE STEPS BELOW
        </h2>
        <h4 className="description second">
          No? Then are you looking for funding, mentorship, collaboration, and
          volunteering
          <br />
          opportunities, or ways to donate to impactful digital inclusion
          programs? <br/><br/>
          <a
            href="https://www.sjdigitalinclusion.org/"
            rel="noreferrer"
            target="_blank"
            className="link2"
          >CLICK HERE TO VISIT THE SAN JOSÉ DIGITAL INCLUSION FUND WEBSITE!</a>
          <br/>
          You can also scroll down to <a href= "#step4" className="link" rel="noreferrer" onClick={props.setContactForm}>Step 4</a> and reach out to us!
        </h4>
        <button onClick={props.handleClose}> CLOSE </button>
      </div>
    </div>
  );
};

export default WelcomePage;
