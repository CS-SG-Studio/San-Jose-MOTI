import React from "react";
import "./Step1Styling.css";

function Step1() {
  return (
    <div className="popup">
      <div className="box">
        <div className="header">
          <h1 className="title">Our Programs</h1>
          <h2 className="title2">
            You will gain access to job, education, healthcare, and service
            opportuntites! The following are included in our bundle package:
          </h2>
        </div>
        <div id="body">
          <div className="tile1">
            <h2 className="title3">ACCESS PROGRAMS</h2>
            <div className="circle">
              <h3 className="text">
                Get information on a low-cost internet package!
              </h3>
            </div>
          </div>
          <div className="tile1">
            <h2 className="title3">DIGITAL LITERACY TRAININGS</h2>
            <div className="circle">
              <h3 className="text">
                Learn
                <br />
                how to use a computer and explore the internet!
              </h3>
            </div>
          </div>
          <div className="tile1">
            <h2 className="title3">DEVICE PROGRAMS</h2>
            <div className="circle">
              <h3 className="text">
                Free access
                <br />
                to computers, laptops, phones, tablets, and other devices.*
              </h3>
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
