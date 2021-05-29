import "./QuestionnaireStyles.css";

function Step0(props) {
  if (props.currentStep !== 0) {
    return null;
  }

  return (
    <container>
      <h1>Welcome to the Questionnaire!</h1>
      <p>
        This questionnaire is designed to check your eligibility for the
        programs offered under San Jose Digital Inclusion Fund. The information
        you proivded will be passed only to the organizations we work incollaboration
        with, and they will reach out to you!
      </p>
    </container>
  );
}

export default Step0;
