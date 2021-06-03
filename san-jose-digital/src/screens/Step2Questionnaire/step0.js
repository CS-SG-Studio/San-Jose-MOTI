import "./QuestionnaireStyles.css";

function Step0(props) {
  if (props.currentStep !== 0) {
    return null;
  }

  return (
    <>
      <h3 className="popup-title">Welcome to the Questionnaire!</h3>
      <p>
        This questionnaire is designed to check your eligibility for the programs offered
        under the San José Digital Inclusion Fund. The information you provide will be
        passed only to the organizations we work with, and will allow them to reach out to
        you!
      </p>
    </>
  );
}

export default Step0;
