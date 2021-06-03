import React from "react";
import "./programStyles.css";

const Step1 = () => {
  return (
    <div className="popup">
      {/* <span className="close-icon2" onClick={props.handleClose}>
        &times;
      </span> */}
      <h3 className="popup-title">Our Programs</h3>
      <p>
        You will gain access to job,
        <br />
        education, healthcare, and service opportunities!
        <br />
        The following are included in our bundle package:
      </p>
      <div className="main">
        {/*Access Programs*/}
        <div className="program">
          <h4 className="circle-heading">ACCESS PROGRAMS</h4>
          <div className="circle-program">
            <a
              className="description"
              href="https://www.everyoneon.org"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p className="description">
                Click here to get information on a low-cost internet package!
              </p>
            </a>
          </div>
        </div>

        {/*Digital Literacy Trainings*/}
        <div className="program">
          <h4 className="circle-heading">DIGITAL LITERACY TRAININGS</h4>
          <div className="circle-program">
            <a
              href="https://www.google.com" /* not sure what website we want here */
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p className="description">
                Learn
                <br />
                how to use a computer and explore the
                <br />
                internet!
              </p>
            </a>
          </div>
        </div>

        {/*Device Programs*/}
        <div className="program">
          <h4 className="circle-heading">DEVICE PROGRAMS</h4>
          <div className="circle-program">
            <a
              href="https://www.google.com" /* not sure what website we want here */
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p className="description">
                Free access
                <br />
                to computers, laptops, phones, tablets, and other devices.*
              </p>
            </a>
          </div>
        </div>
      </div>
      <h5 className="footer">
        *Access to devices are not guaranteed. We operate on a first-come first-serve
        basis.
      </h5>
    </div>
  );
};

export default Step1;
