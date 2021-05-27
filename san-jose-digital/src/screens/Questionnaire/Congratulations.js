import React from "react";
import './CongratulationStyles.css'

function Congratulations() {
  return (
    <div className="congrats-page-styling">
      <h1 style={{ fontSize: "1.75rem" }}>CONGRATULATIONS!</h1>
      <p style={{ fontSize: "1.15rem" }}>
        Thank you for filling out the questionnaire!
        <br />
        Your information has been passed on to grantees.
        <br />
        <br />
        They will be in touch with you soon!
      </p>
      <p style={{ fontSize: "1.15rem" }}>
        In the meantime, please <br /> click
        <a
          href="https://www.sjdigitalinclusion.org/grantees"
          rel="noreferrer"
          target="_blank"
          className="link"
        >
          {" "}
          here{" "}
        </a>
        to see the full list of our grantees!
      </p>
    </div>
  );
}

export default Congratulations;