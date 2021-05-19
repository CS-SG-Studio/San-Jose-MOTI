import React from "react";

function Congratulations() {
  return (
    <div>
      <h1 style={{ fontSize: "3rem" }}>
        CONGRATULATIONS!
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        THANK YOU FOR FILLING OUT THE QUESIONNAIRE.
        <br />
        WE WILL BE IN TOUCH WITH YOU SOON. 
      </p>
      <p style={{ fontSize: "1.5rem" }}>
        In the meantime, please click 
        <a href="https://www.sjdigitalinclusion.org/grantees"> here </a>
        to see the full list of
        <br />
        our grantees!
      </p>
    </div>
  );
}

export default Congratulations;