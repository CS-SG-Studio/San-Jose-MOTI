import React from "react";
import "./Step1Styling.css";

const Step1 = (props) => {
  return (
    <div className="popup">
      <span className="close-icon" onClick={props.handleClose}>
        &times;
      </span>
      <div className="centering-all">
        <div className="header">
<<<<<<< Updated upstream:san-jose-digital/src/screens/JourneyMap/Step1/Step1.js
          <h1 className="title">Our Programs</h1>
          <h2 className="title2">
            You will gain access to job, education, <br />
            healthcare, and service opportunities! <br />
            The following are included in our bundle package:
=======
          <h1 className="steptitle">Our Programs</h1>
          <h2 className="steptitle2">
            Our bundle package includes internet packages, digital literacy training, and access to free devices.
            <br/>Click on the circles below for more information.
>>>>>>> Stashed changes:san-jose-digital/src/screens/Step1Program/program.js
          </h2>
        </div>

        <div className="body">
          {/*Access Programs*/}
          <div className="program">
            {/* <h2 className="pillars">ACCESS PROGRAMS</h2> */}
            <div className="circle title1">
              <a
                href="https://www.everyoneon.org"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3 className="description"></h3>
              </a>
            </div>
          </div>

          {/*Digital Literacy Trainings*/}
          <div className="program">
            {/* <h2 className="pillars">DIGITAL LITERACY TRAININGS</h2> */}
            <div className="circle">
              <a
                href="https://www.google.com" /* not sure what website we want here */
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3 className="description">
                  {/* Learn
                  <br />
                  how to use a computer and explore the
                  <br />
                  internet! */}
                  DIGITAL LITERACY TRAININGS
                </h3>
              </a>
            </div>
          </div>

          {/*Device Programs*/}
          <div className="program">
            {/* <h2 className="pillars">DEVICE PROGRAMS</h2> */}
            <div className="circle">
              <a
                href="https://www.google.com" /* not sure what website we want here */
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3 className="description">
                  {/* Free access
                  <br />
                  to computers, laptops, phones, tablets, and other devices.* */}
                  FREE DEVICE PROGRAMS*
                </h3>
              </a>
            </div>
          </div>
        </div>
        <h4 className="footer">
          *Access to devices are not guaranteed. We operate on a first-come first-serve
          basis.
        </h4>
      </div>
    </div>
  );
};

export default Step1;
