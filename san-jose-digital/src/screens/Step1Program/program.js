import React from "react";
import "./programStyles.css";

const Step1 = () => {
  return (
    <div className="popup">
      <h3 className="popup-title">Our Programs</h3>
      <p>
        Our bundle package includes low-cose internet packages, digital literacy classes,
        and access to free devices. <br />
        Click on the items below for more information!
      </p> 
      <div className="main">
        {/*Access Programs*/}
        <div className="program">
          <h4 className="circle-heading">ACCESS PROGRAMS</h4>
          <div className="circle-program">
            <a href="https://www.everyoneon.org" target="_blank" rel="noreferrer">
              <p className="circle-description">Low-cost internet packages</p>
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
              rel="noreferrer">
              <p className="circle-description">
                Computer classes and digital literacy trainings
              </p>
            </a>
          </div>
        </div>

        {/*Device Programs*/}
        {/* <div className="program">
          <h4 className="circle-heading">DEVICE PROGRAMS</h4>
          <div className="circle-program">
            <a
              href="https://www.google.com" 
              target="_blank"
              rel="noreferrer">
              <p className="circle-description">
                Free access to computers, phones, and other devices.*
              </p>
            </a>
          </div>
        </div> */}
      </div>
      <h5 className="footer">
        *Access to devices are not guaranteed. We operate on a first-come first-serve
        basis.
      </h5>
    </div>
  );
};

export default Step1;
