function Step0(props) {
  if (props.currentStep !== 0) {
    return null;
  }

  return (
    <>
      <h3 className="popup-title">Welcome to the Questionnaire!</h3>
      <p>
        This questionnaire is designed to check your eligibility for the
        programs offered under San José Digital Inclusion Fund. The information
        you provide is completely confidential and will be passed only to the grantee 
        organizations we directly work with. After filling out the questionnaire,
        one of our grantee organizations will get in touch with you!
      </p>
    </>
  );
}

export default Step0;
