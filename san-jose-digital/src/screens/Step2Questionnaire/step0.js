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
          offered under San Jose Digital Inclusion Fund. The information you proivded will
          be passed only to organization we work incollaboration with, and they will reach
          out to you!
        </p>
      </h1>
    </container>
  );
}

export default Step0;
