import React, { useState } from 'react';
import Step0 from './step0';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import './QuestionnaireStyles.css';

// INSTRUCTIONS FOR ADDING QUETSIONS - 
// PART 1: 
// There are 4 "ADD SPOT"s that have been marked on this document. Follow the 
// directions on each of the ADD SPOT's to add the question variable to the
// questionnaire variables. The easiest to locate all of the ADD SPOT's
// is by searching for the term "ADD SPOT" in the file.
// Once you have added the question variable to each of the
// add spots, you should be able to look up the question variable and see
// it appears in exactly FIVE spots.
// 
// PART 2: 
// Navigate to step3.js and follow instructions to add a question there, 
// using the quetsion variable you have just initialized.
// 
// NOTE: Checkbox questions are slightly more complicated and require
// their own additional functions and variables, so please
// reach out to the Stanford team (Ricky, Habeeb, Senem, Rachel)
// if you want to add a checkbox question.

const Questionnaire = (props) => {
  const [data, setData] = useState({
    // STEP1
    currentStep: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
    zip_code: "",
    identity: "Myself",
    language: "English",

    // STEP2
    program1: false, // Child Enrolled in the NSLP (National School Lunch Program)
    program2: false, // CalFresh (food stamps) 
    program3: false, // Supplemental Security Income (SSI) 
    program4: false, // Medi-Cal Recipient
    program5: false, // Household Income Under $70,000/year
    program6: false, // Supplemental Nutrition Assistance Program (SNAP) Recipient
    program7: false, // Social Security Disability Insurance (SSDI) Recipient
    device: "Yes",
    desktop: false,
    laptop: false,
    tablet: false,
    deviceAmount: 1,
    smartphone: "Yes",
    connectsToInternet: "",
    carrier: "",
    dataPlans: "",
    hotspot: "",

    // STEP3
    // ADD SPOT #1: INITIALIZE NEW QUESTION VARIABLE HERE WITH FORMAT -  variableName: "",
    familySize: "",
    schoolDevice: "",
    bringDeviceHome: "",
    homeInternet: "Yes",
    costOfInternet: "",
    internetProvider: "",
    whereInternetIsAccessed: "",
    interestedInHomeInternet: "Yes",
    experienceUsingComputer: "Yes",
    amountOfExperience: "Beginner",
    interestedInFreeClasses: "Yes",
    anyOtherComments: "",
  });

  const {
    // STEP1 variables
    currentStep, name, email, phone, address, zip_code, identity, language,

    // STEP2 variables
    program1, program2, program3, program4, program5, program6, program7, device, desktop, laptop, tablet, deviceAmount, 
    smartphone, connectsToInternet, carrier, dataPlans, hotspot,

    // STEP3 variables
    // ADD SPOT #2: TYPE NEW QUESTION VARIABLE HERE
    familySize, schoolDevice, bringDeviceHome, homeInternet, costOfInternet, internetProvider, whereInternetIsAccessed,
    interestedInHomeInternet, experienceUsingComputer, amountOfExperience, interestedInFreeClasses, anyOtherComments
  } = data;

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // Code for checking/unchecking the checkbox questions
  const onChangeProgram1 = () => {
    setData({ ...data, program1: !program1 });
  };

  const onChangeProgram2 = () => {
    setData({ ...data, program2: !program2 });
  };

  const onChangeProgram3 = () => {
    setData({ ...data, program3: !program3 });
  };

  const onChangeProgram4 = () => {
    setData({ ...data, program4: !program4 });
  };

  const onChangeProgram5 = () => {
    setData({ ...data, program5: !program5 });
  };

  const onChangeProgram6 = () => {
    setData({ ...data, program6: !program6 })
  };

  const onChangeProgram7 = () => {
    setData({ ...data, program7: !program7 })
  };

  const onChangeDesktop = () => {
    setData({ ...data, desktop: !desktop });
  };

  const onChangeLaptop = () => {
    setData({ ...data, laptop: !laptop });
  };

  const onChangeTablet = () => {
    setData({ ...data, tablet: !tablet });
  };

  const _next = () => {
    let newStep = currentStep;
    newStep = newStep >= 2 ? 3 : newStep + 1;
    setData({ ...data, currentStep: newStep });
  };

  const _prev = () => {
    let newStep = currentStep;
    newStep = newStep <= 0 ? 1 : newStep - 1;
    setData({ ...data, currentStep: newStep });
  };

  /*
   * the functions for our button
   */
  const previousButton = () => {
    if (currentStep !== 0) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>
          Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep === 0) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={_next}
        >
          Start
        </button>
      );
    } else if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={_next}
        >
          Next
        </button>
      );
    } else if (currentStep === 3) {
      return (
        <input
          className="btn btn-success btn-block"
          type="submit"
          value="Submit"
        />
      );
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // commenting out backend part so we can submit the sheet w/o filling up the backend
      // const response = await fetch('https://v1.nocodeapi.com/rachelclinton/google_sheets/MfimgcBbjWzzHVku?tabId=Sheet1', 
      // {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify([
      //     [
      //       new Date().toLocaleString(),
      //       // STEP1
      //       name, email, phone, address, zip_code, identity, language, 
      //       // STEP2
      //       program1, program2, program3, program4, program5, program6, program7, device, desktop, laptop, tablet, deviceAmount, 
      //       smartphone, connectsToInternet, carrier, dataPlans, hotspot,
      //       // STEP3
      //       // ADD SPOT #3: TYPE NEW QUESTION VARIABLE HERE
      //       familySize, schoolDevice, bringDeviceHome, homeInternet, costOfInternet, internetProvider, whereInternetIsAccessed,
      //       interestedInHomeInternet, experienceUsingComputer, amountOfExperience, interestedInFreeClasses, anyOtherComments          
      //     ]
      //   ])} // content that will be pushed to the Google Sheets
      
      // );
      // await response.json();
      // setData({ ...data, name:'', email:'', phone:'', address: '', identity: ''});
      props.setQuestionnaire(false);
      props.setCongratulationsPage(true);
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="popup form-styling">
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <Step0 currentStep={currentStep} />
          <Step1
            currentStep={currentStep}
            handleChange={handleChange}
            name={name}
            email={email}
            phone={phone}
            address={address}
            zip_code={zip_code}
            identity={identity}
            language={language}
          />
          <Step2
            currentStep={currentStep}
            handleChange={handleChange}
            onChangeProgram1={onChangeProgram1}
            onChangeProgram2={onChangeProgram2}
            onChangeProgram3={onChangeProgram3}
            onChangeProgram4={onChangeProgram4}
            onChangeProgram5={onChangeProgram5}
            onChangeProgram6={onChangeProgram6}
            onChangeProgram7={onChangeProgram7}
            onChangeDesktop={onChangeDesktop}
            onChangeLaptop={onChangeLaptop}
            onChangeTablet={onChangeTablet}
            program1={program1}
            program2={program2}
            program3={program3}
            program4={program4}
            program5={program5}
            program6={program6}
            program7={program7}
            device={device}
            desktop={desktop}
            tablet={tablet}
            laptop={laptop}
            deviceAmount={deviceAmount}
            smartphone={smartphone}
            connectsToInternet={connectsToInternet}
            carrier={carrier}
            dataPlans={dataPlans}
            hotspot={hotspot}
          />
          <Step3
            // ADD SPOT #4: ADD NEW QUESTION VARIABLE HERE WITH FORMAT variableName={variableName}
            currentStep={currentStep}
            handleChange={handleChange}
            familySize={familySize}
            schoolDevice={schoolDevice}
            bringDeviceHome={bringDeviceHome}
            homeInternet={homeInternet}
            costOfInternet={costOfInternet}
            internetProvider={internetProvider}
            whereInternetIsAccessed={whereInternetIsAccessed}
            interestedInHomeInternet={interestedInHomeInternet}
            experienceUsingComputer={experienceUsingComputer}
            amountOfExperience={amountOfExperience}
            interestedInFreeClasses={interestedInFreeClasses}
            anyOtherComments={anyOtherComments}
          />
          {previousButton()}
          {nextButton()}
        </form>
      </React.Fragment>
    </div>
  );
};

export default Questionnaire;
