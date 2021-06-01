import React from "react";
import "./programStyles.css";

const Step1 = (props) => {
  return (
    <div className="popup">
      <span className="close-icon2" onClick={props.handleClose}>
        &times;
      </span>
      <div className="centering-all">
        <div className="header">
          <h1 className="steptitle">Our Programs</h1>
          <h2 className="steptitle2">
            Our bundle package includes low-cose internet packages, digital literacy classes, and access
            to free devices. <br/>Click on the circles below for more information!
          </h2>
        </div>
        <div className="body">
          {/*Access Programs*/}
          <div className="program">
            {/* <h2 className="pillars">ACCESS PROGRAMS</h2> */}
            <div className="circle">
              <a
                href="https://www.everyoneon.org"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3 className="description">
                  Low-cost internet packages
                </h3>
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
                  Computer classes and digital literacy trainings
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
                  Free access to computers, phones, and other devices.*
                </h3>
              </a>
            </div>
          </div>
        </div>
        <h4 className="footer">
          *Access to devices is not guaranteed. We operate on a first-come first-serve
          basis.
        </h4>
      </div>
    </div>
  );
};

export default Step1;
