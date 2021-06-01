import React from "react";
import "./welcomePage.css";
import { Link } from "react-scroll";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup">
      <div className="centering">
        <h1 className="welcometitle">ARE YOU LOOKING FOR</h1>
        <div className="threecircles">
          <div className="welcomecircle">
            <h1 className="welcomedescription">LOW-COST INTERNET PACKAGES?</h1>
          </div>

          <div className="welcomecircle">
            <h1 className="welcomedescription">COMPUTER AND INTERNET LESSONS?</h1>
          </div>
          <div className="welcomecircle">
            <h1 className="welcomedescription">FREE ACCESS TO DIGITAL DEVICES?</h1>
          </div>
        </div>
        <br />
        <br />
        <h2 className="welcometitle two">
          YES? You are in the right place! <br />
          <Link to={props.to} spy={props.spy} smooth={props.smooth}>
            <button className="startNow" onClick={props.handleClose}>
              START YOUR JOURNEY AND FOLLOW THE STEPS
            </button>
          </Link>
        </h2>
        <h2 className="welcometitle two">
          NO? Scroll down to{" "}
          <a
            href="#step4"
            className="link"
            rel="noreferrer"
            onClick={props.setContactForm}
          >
            Step 4
          </a>{" "}
          and reach out to us!
        </h2>
      </div>
    </div>
  );
};

export default WelcomePage;
