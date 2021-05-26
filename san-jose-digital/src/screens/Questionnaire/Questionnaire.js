import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import './QuestionnaireStyles.css';
import Congratulations from './Congratulations'

// rename this!
// TODO: figure out how to make currentStep based on total number of pages of questionnaire
const Questionnairee = () => {
  const programs = [
    'Child Enrolled in the NSLP (National School Lunch Program)',
    'CalFresh (food stamps) or Supplemental Nutrition Assistance Program (SNAP) Recipient'
  ];

  const componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  const toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  const createCheckbox = (label) => (
    <Checkbox
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  )

  const createCheckboxes = () => (
    programs.map(createCheckbox)
  )

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
      programs,
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
      hotspot: "",

      // STEP3
      familySize: "",
      schoolDevice: "",
      bringDeviceHome: "",
      homeInternet: "",
      costOfInternet: "",
      schoolDevice: "",
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
      device, laptop, desktop, tablet, deviceFollowUp, deviceAmount, 
      smartphone, connectsToInternet, carrier, dataPlans, hotspot,

      // STEP3
      familySize, schoolDevice, bringDeviceHome, homeInternet, costOfInternet, 
      internetProvider, whereInternetIsAccessed, interestedInHomeInternet, experienceUsingComputer, 
      amountOfExperience, interestedInFreeClasses 
  } = data

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://v1.nocodeapi.com/rachelclinton/google_sheets/MfimgcBbjWzzHVku?tabId=Sheet1', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          [name, email, phone, address, identity, new Date().toLocaleString()]
        ]) // content that will be pushed to the Google Sheets
      }
      );
      await response.json();
      setData({ ...data, name:'', email:'', phone:'', address: '', identity: ''});
      alert("Form submitted!!")
    } catch(err) {
      console.log(err);
    }
    // for (const checkbox of this.selectedCheckboxes) {
    //   console.log(checkbox, 'is selected.');
    // }
  }

  const _next = () => {
    let newStep = currentStep;
    newStep = newStep >= 2 ? 3 : newStep + 1;
    setData({...data, currentStep: newStep})
    // setState({
    //   currentStep: currentStep,
    // });
  };

  const _prev = () => {
    let newStep = currentStep;
    newStep = newStep <= 1 ? 1 : newStep - 1;    
    setData({...data, currentStep: newStep})   
    // setState({
    //   currentStep: currentStep,
    // });
  };

   /*
   * the functions for our button
   */ 
  const previousButton = () => {
    // let currentStep = {currentStep};
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>
        Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    // let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right" type="button" onClick={_next}>
          Next
        </button>
      );
    }
    return null;
  };

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
              programs={programs}
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
}


// class Questionnairee extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // STEP1
//       currentStep: 1,
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       zip_code: "",
//       identity: "",
//       language: "",

//       // STEP2
//       program1: "",
//       program2: "",
//       device: "",
//       laptop: "",
//       desktop: "",
//       tablet: "",
//       deviceFollowUp: "",
//       deviceAmount: "",
//       smartphone: "",
//       connectsToInternet: "",
//       carrier: "",
//       dataPlans: "",
//       hotspot: "",

//       // STEP3
//       familySize: "",
//       schoolDevice: "",
//       bringDeviceHome: "",
//       homeInternet: "",
//       costOfInternet: "",
//       schoolDevice: "",
//       internetProvider: "",
//       whereInternetIsAccessed: "",
//       interestedInHomeInternet: "",
//       experienceUsingComputer: "",
//       amountOfExperience: "",
//       interestedInFreeClasses: "",
//     };
//     // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   //   This code doesn't work currently
//   //   handleCheckboxChange = (event) => {
//   //   const target = event.target;
//   //   const value = target.type === "checkbox" ? target.checked : target.value;
//   //   const name = target.name;

//   //   this.setState({
//   //     [name]: value,
//   //   });
//   // };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, email, username, password } = this.state;
//     alert("form submitted!!");
//   };

//   _next = () => {
//     let currentStep = this.state.currentStep;
//     currentStep = currentStep >= 2 ? 3 : currentStep + 1;
//     this.setState({
//       currentStep: currentStep,
//     });
//   };

//   _prev = () => {
//     let currentStep = this.state.currentStep;
//     currentStep = currentStep <= 1 ? 1 : currentStep - 1;
//     this.setState({
//       currentStep: currentStep,
//     });
//   };

//   /*
//    * the functions for our button
//    */
//   previousButton() {
//     let currentStep = this.state.currentStep;
//     if (currentStep !== 1) {
//       return (
//         <button className="btn btn-secondary" type="button" onClick={this._prev}>
//           Previous
//         </button>
//       );
//     }
//     return null;
//   }

//   nextButton() {
//     let currentStep = this.state.currentStep;
//     if (currentStep < 3) {
//       return (
//         <button
//           className="btn btn-primary float-right"
//           type="button"
//           onClick={this._next}
//         >
//           Next
//         </button>
//       );
//     }
//     return null;
//   }

//   render() {
//     return (
//       <div className="form-styling">
//         <React.Fragment>
//           <h1>Welcome to the Questionnaire!</h1>
//           <p>Step {this.state.currentStep} </p>

//           <form onSubmit={this.handleSubmit}>
//             <Step1
//               currentStep={this.state.currentStep}
//               handleChange={this.handleChange}
//               name={this.state.name}
//               email={this.state.email}
//               phone={this.state.phone}
//               address={this.state.address}
//               zip_code={this.state.zip_code}
//               identity={this.state.identity}
//               language={this.state.language}
//             />
//             <Step2
//               currentStep={this.state.currentStep}
//               handleChange={this.handleChange}
//               program1={this.state.program1}
//               program2={this.state.program2}
//               device={this.state.device}
//               desktop={this.state.desktop}
//               tablet={this.state.tablet}
//               laptop={this.state.laptop}
//               deviceFollowUp={this.state.deviceFollowUp}
//               deviceAmount={this.state.deviceAmount}
//               smartphone={this.state.smartphone}
//               connectsToInternet={this.state.connectsToInternet}
//               carrier={this.state.carrier}
//               dataPlans={this.state.dataPlans}
//               hotspot={this.state.hotspot}
//             />
//             <Step3
//               currentStep={this.state.currentStep}
//               handleChange={this.handleChange}
//               familySize={this.state.familySize}
//               schoolDevice={this.state.schoolDevice}
//               bringDeviceHome={this.state.bringDeviceHome}
//               homeInternet={this.state.homeInternet}
//               costOfInternet={this.state.costOfInternet}
//               internetProvider={this.state.internetProvider}
//               whereInternetIsAccessed={this.state.whereInternetIsAccessed}
//               interestedInHomeInternet={this.state.interestedInHomeInternet}
//               experienceUsingComputer={this.state.experienceUsingComputer}
//               amountOfExperience={this.state.amountOfExperience}
//               interestedInFreeClasses={this.state.interestedInFreeClasses}
//             />
//             {this.previousButton()}
//             {this.nextButton()}
//           </form>
//         </React.Fragment>
//       </div>
//     );
//   }
// }

export default Questionnairee;
