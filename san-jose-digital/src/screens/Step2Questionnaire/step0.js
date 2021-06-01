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
        programs offered under San José Digital Inclusion Fund. The information
        you provide is completely confidential will be passed only to the grantee 
        organizations we work directly with. After filling out the questionnaire,
        one of our grantee organizations will get in touch with you!
      </p>
    </container>
  );
}

export default Step0;
