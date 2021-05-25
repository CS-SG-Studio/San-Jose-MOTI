import React from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import './QuestionnaireStyles.css';
import Congratulations from './Congratulations'
class Questionnairee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // STEP1
        currentStep: 1,
        name:  '',
        email: '',
        phone: '',
        address: '',
        zip_code: '',
        identity: '',
        language: '',

        // STEP2
        program1: '',
        program2: '',
        device: '',
        laptop: '',
        desktop: '',
        tablet: '',
        deviceFollowUp: '',
        deviceAmount: '',
        smartphone: '',
        connectsToInternet: '',
        carrier: '',
        dataPlans: '',
        hotspot: '',

        // STEP3
        familySize: '', 
        schoolDevice: '',
        bringDeviceHome: '',
        homeInternet: '',
        costOfInternet: '',
        schoolDevice: '',
        internetProvider: '',
        whereInternetIsAccessed: '',
        interestedInHomeInternet: '',
        experienceUsingComputer: '',
        amountOfExperience: '',
        interestedInFreeClasses: '',
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  handleCheckboxChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

   
  handleSubmit = event => {
    alert('form submitted!')
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <div className="form-styling">
      <React.Fragment>
      <h1>Welcome to the Questionnaire!</h1>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
        <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            address={this.state.address}
            zip_code={this.state.zip_code}
            identity={this.state.identity}
            language={this.state.language}
        />
        <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            program1={this.state.program1}
            program2={this.state.program2}
            device={this.state.device}
            desktop={this.state.desktop}
            tablet={this.state.tablet}
            laptop={this.state.laptop}
            deviceFollowUp={this.state.deviceFollowUp}
            deviceAmount={this.state.deviceAmount}
            smartphone={this.state.smartphone}
            connectsToInternet={this.state.connectsToInternet}
            carrier={this.state.carrier}
            dataPlans={this.state.dataPlans}
            hotspot={this.state.hotspot}
        />
        <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            familySize={this.state.familySize}
            schoolDevice={this.state.schoolDevice}
            bringDeviceHome={this.state.bringDeviceHome}
            homeInternet={this.state.homeInternet}
            costOfInternet={this.state.costOfInternet}
            internetProvider={this.state.internetProvider}
            whereInternetIsAccessed={this.state.whereInternetIsAccessed}
            interestedInHomeInternet={this.state.interestedInHomeInternet}
            experienceUsingComputer={this.state.experienceUsingComputer}
            amountOfExperience={this.state.amountOfExperience}
            interestedInFreeClasses={this.state.interestedInFreeClasses}
        />
        {this.previousButton()}
        {this.nextButton()}
      </form>
      </React.Fragment>
      </div>
    );
  }
}


export default Questionnairee;