import React from "react";
import "./Step1Styling.css";

const Step1 = props =>{
  return (
    <div className="popup">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="header">
          <h1 className="title">Our Programs</h1>
          <h2 className="title2">
            You will gain access to job, education, healthcare, and service
            opportunities! The following are included in our bundle package:
          </h2>
        </div>
        <div id="body">
          <div className="tile1">
            <h2 className="title3">ACCESS PROGRAMS</h2>
            <div className="circle">
              <a href="https://www.everyoneon.org" 
                target="_blank" 
                style={{ textDecoration: "none" }}
              >
                <h3 className="text">
                  Click here to get information on a low-cost internet package!
                </h3>
              </a>
            </div>
          </div>
          <div className="tile1">
            <h2 className="title3">DIGITAL LITERACY TRAININGS</h2>
            <div className="circle">
              <a href="https://www.google.com" /* not sure what website we want here */
                target="_blank" 
                style={{ textDecoration: "none" }}
              >
                <h3 className="text">
                  Learn
                  <br />
                  how to use a computer and explore the 
                  <br />
                  internet!
                </h3>
              </a>
            </div>
          </div>
          <div className="tile1">
            <h2 className="title3">DEVICE PROGRAMS</h2>
            <div className="circle">
              <a href="https://www.google.com" /* not sure what website we want here */
                target="_blank" 
                style={{ textDecoration: "none" }}
              >
                <h3 className="text">
                  Free access
                  <br />
                  to computers, laptops, phones, tablets, and other devices.*
                </h3>
              </a>
            </div>
          </div>
        </div>
        <h4 className="footer">
          *Access to devices are not guaranteed. We operate on a first-come
          first-serve basis.
        </h4>
      </div>
    </div>
  );
}

export default Step1;
