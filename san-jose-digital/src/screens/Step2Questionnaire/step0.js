import "./QuestionnaireStyles.css";

function Step0(props) {
  if (props.currentStep !== 0) {
    return null;
  }

  return (
    <container>
      <h1 className="step0-title">
        Welcome to the Questionnaire!
        <p className="step0-details">
          This questionnaire is designed to check your eligibility for the programs
          offered by the San José Digital Inclusion Fund. The information you provide will
          be passed only to grantee organization we work with, and they will reach
          out to you for further steps!
        </p>
      </h1>
    </container>
  );
}

export default Step0;
