import React, { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import './QuestionnaireStyles.css';
// import Congratulations from './Congratulations';

// TODO: figure out how to make currentStep based on total number of pages of questionnaire
const Questionnaire = () => {
  const [data, setData] = useState({
    // STEP1
    currentStep: 1,
    name: "",
    email: "",
    phone: "",
    address: "",
    zip_code: "",
    identity: "",
    language: "",

    // STEP2
    program1: "", // Child Enrolled in the NSLP (National School Lunch Program)
    program2: "", // CalFresh (food stamps) or Supplemental Nutrition Assistance Program (SNAP) Recipient
    program3: "", // Supplemental Security Income (SSI) or Social Security Disability Insurance (SSDI) Recipient
    program4: "", // Medi-Cal Recipient
    program5: "", // Household Income Under $70,000/year
    device: "",
    laptop: "",
    desktop: "",
    tablet: "",
    deviceFollowUp: "",
    deviceAmount: "",
    smartphone: "",
    connectsToInternet: "",
    carrier: "",
    dataPlans: "",
    
    // STEP3
    familySize: "",
    schoolDevice: "",
    bringDeviceHome: "",
    homeInternet: "",
    costOfInternet: "",
    internetProvider: "",
    whereInternetIsAccessed: "",
    interestedInHomeInternet: "",
    experienceUsingComputer: "",
    amountOfExperience: "",
    interestedInFreeClasses: "",
  });

  const {
    // STEP1
    currentStep, name, email, phone, address, zip_code, identity, language,

    // STEP2
    program1, program2, program3, program4, program5, device, laptop, desktop, tablet, deviceFollowUp, deviceAmount, 
    smartphone, connectsToInternet, carrier, dataPlans, hotspot,

    // STEP3
    familySize, schoolDevice, bringDeviceHome, homeInternet, costOfInternet, internetProvider, whereInternetIsAccessed,
    interestedInHomeInternet, experienceUsingComputer, amountOfExperience, interestedInFreeClasses,
  } = data;


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  
  // see if there's a way to simplify/condense this
  const onChangeProgram1 = () => {
    setData({ ...data, program1: !program1})
  };

  const onChangeProgram2 = () => {
    setData({ ...data, program2: !program2})
  };

  const onChangeProgram3 = () => {
    setData({ ...data, program3: !program3})
  };

  const onChangeProgram4 = () => {
    setData({ ...data, program4: !program4})
  };

  const onChangeProgram5 = () => {
    setData({ ...data, program5: !program5})
  };

  const onChangeDesktop = () => {
    setData({ ...data, desktop: !desktop})
  };

  const onChangeLaptop = () => {
    setData({ ...data, laptop: !laptop})
  };

  const onChangeTablet = () => {
    setData({ ...data, tablet: !tablet})
  };

  const _next = () => {
    let newStep = currentStep;
    newStep = newStep >= 2 ? 3 : newStep + 1;
    setData({ ...data, currentStep: newStep });
  };

  const _prev = () => {
    let newStep = currentStep;
    newStep = newStep <= 1 ? 1 : newStep - 1;
    setData({ ...data, currentStep: newStep });
  };

  /*
   * the functions for our button
   */
  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>Previous</button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button className="btn btn-primary float-right" type="button" onClick={_next}>Next</button>
      ); 
    }
    else if (currentStep === 3) {
      return (
        <input className="btn btn-success btn-block" type='submit' value='Submit'/>
      )
    };
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // commenting this out for now because i need to update the google sheets
      // const response = await fetch('https://v1.nocodeapi.com/rachelclinton/google_sheets/MfimgcBbjWzzHVku?tabId=Sheet1', 
      // {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify([
      //     [name, email, phone, address, identity, new Date().toLocaleString()]
      //   ]) // content that will be pushed to the Google Sheets
      // }
      // );
      // await response.json();
      //setData({ ...data, name:'', email:'', phone:'', address: '', identity: ''});
      alert("Form submitted!")
      // TODO: close questionnaire. Still don't know how to call the questionnaireStep function in this file
      // TODO: make the congratulations page appear in step 3
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="form-styling">
        <React.Fragment>
          <h1>Welcome to the Questionnaire!</h1>
          <p>Step {currentStep} </p>
          <form onSubmit={handleSubmit}>
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
              onChangeDesktop={onChangeDesktop}
              onChangeLaptop={onChangeLaptop}
              onChangeTablet={onChangeTablet}
              program1={program1}
              program2={program2}
              program3={program3}
              program4={program4}
              program5={program5}
              device={device}
              desktop={desktop}
              tablet={tablet}
              laptop={laptop}
              deviceFollowUp={deviceFollowUp}
              deviceAmount={deviceAmount}
              smartphone={smartphone}
              connectsToInternet={connectsToInternet}
              carrier={carrier}
              dataPlans={dataPlans}
              hotspot={hotspot}
            />
            <Step3
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
            />
            {previousButton()}
            {nextButton()}
          </form>
        </React.Fragment>
      </div>
  )
};

export default Questionnaire;
