import React from "react";
import "./CongratulationStyles.css";

function Congratulations() {
  return (
    <div className="popup congrats-page-styling">
      <h1 className="congrats-title">
        CONGRATULATIONS!
        <p className="congrats-detail">
          Thank you for filling out the questionnaire!
          <br />
          We will be in touch with you soon.
        </p>
        <p className="congrats-detail">
          In the meantime, please click
          <a
            href="https://www.sjdigitalinclusion.org/grantees"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            here
          </a>
          to see the full list of our grantees!
        </p>
      </h1>
    </div>
  );
}

export default Congratulations;
