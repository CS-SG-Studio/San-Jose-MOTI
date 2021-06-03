import React from "react";
import "./welcomePage.css";

const WelcomePage = (props) => {
  return (
    <div className="welcomePopup">
      <div className="centering">
        <h1 className="welcometitle">ARE YOU LOOKING FOR</h1>
        {/* <h1>
          <ul style={{listStyleType: "none", color:"white"}}>
            <li>LOW-COST INTERNET PACKAGES</li>
            <li>COMPUTER AND INTERNET LESSONS</li>
            <li>FREE ACCESS TO DIGITAL DEVICES</li>
          </ul>
        </h1> */}
        <br />
        <div className="threecircles">
          <div className="welcomecircle">
            <h1 className="welcomedescription">Low-Cost Internet Packages?</h1>
          </div>

          <div className="welcomecircle">
            <h1 className="welcomedescription">Computer and Internet Lessons?</h1>
          </div>
          <div className="welcomecircle">
            <h1 className="welcomedescription">Free Access to Digital Devices?</h1>
          </div>
        </div>
        <br />
        <h2 className="welcometitle two">
          YES? You are in the right place! <br />
          <button className="startNow" onClick={props.handleClose}>
            <a
              href="#step1"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p style={{ margin: "0", fontSize: "1.5rem" }}>CLICK HERE TO START YOUR JOURNEY</p>
            </a>
          </button>
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
          to reach out to us with any questions!
        </h2>
      </div>
    </div>
  );
};

export default WelcomePage;
