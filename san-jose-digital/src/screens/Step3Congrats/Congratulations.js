import React from "react";
import "./CongratulationStyles.css";

function Congratulations() {
  return (
    <div className="popup">
      <h3 className="popup-title">CONGRATULATIONS!</h3>
      <p>
        Thank you for filling out the questionnaire!
        <br />
        We will be in touch with you soon.
      </p>
      <p>
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
    </div>
  );
}

export default Congratulations;
