import React from "react";
import './CongratulationStyles.css'

function Congratulations() {
  return (
    <div className="congrats-page-styling">
      <h1 style={{ fontSize: "3rem" }}>
        CONGRATULATIONS!
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        Thank you for filling out the questionnaire!
        <br />
        We will be in touch with you soon!
      </p>
      <p style={{ fontSize: "1.5rem" }}>
        In the meantime, please click 
        <a href="https://www.sjdigitalinclusion.org/grantees" rel="noreferrer" target="_blank" className="link"> here </a>  
        to see the full list of our grantees!
      </p>
    </div>
  );
}

export default Congratulations;