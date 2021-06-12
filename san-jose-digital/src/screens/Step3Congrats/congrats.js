import React from "react";
import "./congratsStyles.css"; // empty

function Congratulations() {
  return (
    <div className="popup">
      <h3 className="popup-title">Congratulations!</h3>
      <p>
        Thank you for filling out the questionnaire!
        <br />
        We will be in touch with you soon.
      </p>
      <p>
        In the meantime, please click
        <a
          className="link"
          href="https://www.sjdigitalinclusion.org/grantees"
          rel="noreferrer"
          target="_blank"
        >
          here
        </a>
        to see the full list of our grantees!
      </p>
    </div>
  );
}

export default Congratulations;
