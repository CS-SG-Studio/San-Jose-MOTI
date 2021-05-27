function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <container>
    <div className="form-group">
        <label htmlFor="familySize">How many people live in your home?</label>
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
    <p>If you have a child/children in school: </p>
    <div className="form-group">
        <label htmlFor="schoolDevice">Does the school provide a computing device 
        for your child/children in class?</label>
        <select
            className="form-control"
            id="schoolDevice"
            name="schoolDevice"
            value={props.schoolDevice}
            onChange={props.handleChange}
        >    
            <option name="none"> </option>
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>  
    </div>
    <div className="form-group">
        <label htmlFor="bringDeviceHome">Is your child/children allowed to bring home the device to do
        homework and to be used by the family?</label>
        <select
            className="form-control"
            id="bringDeviceHome"
            name="bringDeviceHome"
            value={props.bringDeviceHome}
            onChange={props.handleChange}
        >    
            <option name="none"> </option>
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
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>  
    </div>
    <p>If you access internet at home:</p>
    <div className="form-group">
        <label htmlFor="costOfInternet">What is the monthly cost of your internet service?</label>
        <select
            className="form-control"
            id="costOfInternet"
            name="costOfInternet"
            value={props.costOfInternet}
            onChange={props.handleChange}
        >    
            <option name="1">$9.99 or less</option>
            <option name="2">$10-14.99</option>
            <option name="3">$15-20.99</option>
            <option name="4">$21 or more</option>    
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
    <p>If you do not access internet at home:</p>
    <div className="form-group">
        <label htmlFor="whereInternetIsAccessed">Do you primarily access internet at</label>
        <select
            className="form-control"
            id="whereInternetIsAccessed"
            name="whereInternetIsAccessed"
            value={props.whereInternetIsAccessed}
            onChange={props.handleChange}
        >    
            <option name="work">Work</option>
            <option name="library">Library</option>  
            <option name="someoneElsesHouse">Someone else's house</option>
            <option name="other">Other</option>    
        </select>  
    </div>
    <div className="form-group">
        <label htmlFor="interestedInHomeInternet">Are you interested in learning about affordable home internet offers?</label>
        <select
            className="form-control"
            id="interestedInHomeInternet"
            name="interestedInHomeInternet"
            value={props.interestedInHomeInternet}
            onChange={props.handleChange}
        >    
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>  
    </div>
    <div className="form-group">
        <label htmlFor="experienceUsingComputer">Do you have experience using a computing device?</label>
        <select
            className="form-control"
            id="experienceUsingComputer"
            name="experienceUsingComputer"
            value={props.experienceUsingComputer}
            onChange={props.handleChange}
        >    
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>  
    </div>
    <div className="form-group">
        <label htmlFor="amountOfExperience">If you have experience using a computing device, do you consider
            yourself to be a:</label>
        <select
            className="form-control"
            id="amountOfExperience"
            name="amountOfExperience"
            value={props.amountOfExperience}
            onChange={props.handleChange}
        >    
            <option name="beginner">Beginner User</option>
            <option name="intermediate">Intermediate User</option>  
            <option name="advanced">advanced User</option>    
        </select>  
    </div>
    <div className="form-group">
        <label htmlFor="interestedInFreeClasses">Are you interested in learning about FREE computer classes?</label>
        <select
            className="form-control"
            id="interestedInFreeClasses"
            name="interestedInFreeClasses"
            value={props.interestedInFreeClasses}
            onChange={props.handleChange}
        >    
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>  
    </div>
    </container>
  );
}

export default Step3;