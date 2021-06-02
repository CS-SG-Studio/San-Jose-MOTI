function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <h3 className="popup-title">Step 3</h3>
      <div className="myProgress">
        <div className="myBar third"></div>
      </div>
      {/* 
        ADD NEW QUESTION HERE
      */}

      {/* Instructions on adding questions:
          
          Note: Replace "variableName" with the name of the new question variable that you initialized in Questionnaire.js
          
          For TEXT INPUT questions, use this format:
            <div className="form-group">
              <label htmlFor="variableName">[TYPE THE QUESTION HERE]</label>
              <input
                className="form-control"
                id="variableName"
                name="variableName"
                type="text"
                placeholder="Enter ___ here"
                value={props.variableName}
                onChange={props.handleChange}
              />
            </div> 
          
            For questions where user should SELECT AN OPTION, use this format:
            <div className="form-group">
              <label htmlFor="variableName">[TYPE THE QUESTION HERE]</label>
              <select
                className="form-control"
                id="variableName"
                name="variableName"
                value={props.variableName}
                onChange={props.handleChange}
              >
                <option name="blank"> </option>
                <option name="first">[The first option]</option>
                <option name="second">[The second option]</option>
                <option name="third">[The third option]</option>
                ... repeat if you want more options
              </select>
            </div>

            Checkbox questions are slightly more complicated and require
            their own additional functions in Questionnaire.js, so please
            reach out to the Stanford team (Ricky, Habeeb, Senem, Rachel)
            if you want to add a checkbox question.
       */}
      <div className="form-group">
        <label htmlFor="familySize">
          <b>How many people live in your home?</b>
        </label>
        <input
          className="form-control"
          id="familySize"
          name="familySize"
          type="text"
          placeholder="Enter number of people"
          value={props.familySize}
          onChange={props.handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          <b>
            <u>If you have a child/children in school: </u>
          </b>
        </label>
      </div>
      <div style={{ padding: "0 0 0 20px" }}>
        <div className="form-group">
          <label htmlFor="schoolDevice">
            Does the school provide a computing device for your child/children in class?
          </label>
          <select
            className="form-control"
            id="schoolDevice"
            name="schoolDevice"
            value={props.schoolDevice}
            onChange={props.handleChange}
          >
            <option name="blank"> </option>
            <option name="yes">Yes</option>
            <option name="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bringDeviceHome">
            Is your child/children allowed to bring home the device to do homework and to
            be used by the family?
          </label>
          <select
            className="form-control"
            id="bringDeviceHome"
            name="bringDeviceHome"
            value={props.bringDeviceHome}
            onChange={props.handleChange}
          >
            <option name="blank"> </option>
            <option name="yes">Yes</option>
            <option name="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="homeInternet">Do you have internet access at home?</label>
          <select
            className="form-control"
            id="homeInternet"
            name="homeInternet"
            value={props.homeInternet}
            onChange={props.handleChange}
          >
            <option name="blank"> </option>
            <option name="yes">Yes</option>
            <option name="no">No</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>
          <b>
            <u>If you access internet at home:</u>
          </b>
        </label>
      </div>
      <div style={{ padding: "0 0 0 20px" }}>
        <div className="form-group">
          <label htmlFor="costOfInternet">
            What is the monthly cost of your internet service?
          </label>
          <select
            className="form-control"
            id="costOfInternet"
            name="costOfInternet"
            value={props.costOfInternet}
            onChange={props.handleChange}
          >
            <option name="blank"> </option>
            <option name="1">$9.99 or less</option>
            <option name="2">$10-14.99</option>
            <option name="3">$15-20.99</option>
            <option name="4">$21 or more</option>
            <option name="notSure">I do not know</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="internetProvider">Who is your internet service provider?</label>
          <input
            className="form-control"
            id="internetProvider"
            name="internetProvider"
            placeholder="Enter name of internet service provider"
            type="text"
            value={props.internetProvider}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>
          <b>
            <u>If you do not access internet at home:</u>
          </b>
        </label>
      </div>
      <div style={{ padding: "0 0 0 20px" }}>
        <div className="form-group">
          <label htmlFor="whereInternetIsAccessed">
            Do you primarily access internet at
          </label>
          <select
            className="form-control"
            id="whereInternetIsAccessed"
            name="whereInternetIsAccessed"
            value={props.whereInternetIsAccessed}
            onChange={props.handleChange}
          >
            <option name="blank"> </option>
            <option name="work">Work</option>
            <option name="library">Library</option>
            <option name="someoneElsesHouse">Someone else's house</option>
            <option name="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="interestedInHomeInternet">
            Are you interested in learning about affordable home internet offers?
          </label>
          <select
            className="form-control"
            id="interestedInHomeInternet"
            name="interestedInHomeInternet"
            value={props.interestedInHomeInternet}
            onChange={props.handleChange}
          >
            <option name="blank"> </option>
            <option name="yes">Yes</option>
            <option name="no">No</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="experienceUsingComputer">
          <b>Do you have experience using a computing device?</b>
        </label>
        <select
          className="form-control"
          id="experienceUsingComputer"
          name="experienceUsingComputer"
          value={props.experienceUsingComputer}
          onChange={props.handleChange}
        >
          <option name="blank"> </option>
          <option name="yes">Yes</option>
          <option name="no">No</option>
        </select>
      </div>
      <div className="form-group">
        <div style={{ padding: "0 0 0 20px" }}>
          <label htmlFor="amountOfExperience">
            If you have experience using a computing device, do you consider yourself to
            be a:
          </label>
          <select
            className="form-control"
            id="amountOfExperience"
            name="amountOfExperience"
            value={props.amountOfExperience}
            onChange={props.handleChange}
          >
            <option name="beginner">Beginner User</option>
            <option name="intermediate">Intermediate User</option>
            <option name="advanced">Advanced User</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="interestedInFreeClasses">
          <b>Are you interested in learning about FREE computer classes?</b>
        </label>
        <select
          className="form-control"
          id="interestedInFreeClasses"
          name="interestedInFreeClasses"
          value={props.interestedInFreeClasses}
          onChange={props.handleChange}
        >
          <option name="blank"> </option>
          <option name="yes">Yes</option>
          <option name="no">No</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="anyOtherComments">
          <b>
            Do you have other questions or comments for the grantees? Please list them
            here!
          </b>
        </label>
        <textarea
          className="form-control"
          id="anyOtherComments"
          name="anyOtherComments"
          type="textarea"
          value={props.anyOtherComments}
          onChange={props.handleChange}
          rows="6"
          cols="60"
        />
      </div>
    </>
  );
}

export default Step3;
