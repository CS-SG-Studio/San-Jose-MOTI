import Questionnairee from './Questionnaire'

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <container>
    {/* {this.createCheckboxes()} */}
    {/* <div className="form-group"> */}
        {/* TODO: add rest of programs and figure out how to remember 
        which itmes they selected when it comes to checkboxes (currently the text and select 
        questions are saving their responses but the checkbox ones aren't) */}
        <p>Do you currently qualify for any of the 
        following programs? Please check any that apply.</p>
        {/* <label htmlFor="program1">
            Child Enrolled in the NSLP (National School Lunch Program)
        </label>
        <input 
            className="form-control" 
            id="program1" 
            name="program1" 
            type="checkbox"
            value={props.program1}
            onChange={props.handleChange}
        />
    </div>
    <div>
        <label htmlFor="program2">
            CalFresh (food stamps) or Supplemental Nutrition Assistance
            Program (SNAP) Recipient
        </label>
        <input 
            className="form-control" 
            id="program2" 
            name="program2" 
            type="checkbox"
            checked={props.program2.value}
            value={props.program2}
            onChange={props.handleChange}
        />
    </div> */}
    <div className="form-group">
        <label htmlFor="device">
            Do you have a working computing device (such as a desktop, laptop,
            or tablet) at home?
        </label>
        <select 
            className="form-control" 
            id="device" 
            name="device" 
            value={props.device}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>
        </select>
    </div> 
    <div className="form-group">
        <p htmlFor="deviceFollowUp">If you answered yes to the previous question, what kind of device(s)
        do you own?
        </p>
        <input
            type="checkbox"
            id="desktop"
            name="desktop"
            value={props.desktop}
            onChange={props.handleChange}
        />
        <label for="desktop">Desktop</label>
        <input
            type="checkbox"
            id="laptop"
            name="laptop"
            value={props.laptop}
            onChange={props.handleChange}
        />
        <label for="laptop">Laptop</label>
        <input
            type="checkbox"
            id="tablet"
            name="tablet"
            value={props.tablet}
            onChange={props.handleChange}
        />
        <label for="tablet">Tablet</label>
    </div>
    <div class="form-group">
        <label htmlFor="deviceAmount">How many devices do you have in your home?</label>
        <select 
            className="form-control"
            id="deviceAmount" 
            name="deviceAmount"
            value={props.deviceAmount}
            onChange={props.handleChange}
        >
            <option name="one">1</option>
            <option name="two">2</option>
            <option name="three">3</option>
            <option name="four">4</option>
            <option name="five-or-more">5+</option>
        </select>
    </div>
    <div class="form-group">
        <label htmlFor="smartphone">Do you have a smartphone?</label>
        <select 
            className="form-control"
            id="smartphone" 
            name="smartphone"
            value={props.smartphone}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>
        </select>
    </div>
    <p>If you answered yes to the previous question:</p>
    <div class="form-group">
        <label htmlFor="connectsToInternet">Do you use your smartphone to connect to the internet?</label>
        <select 
            className="form-control"
            id="connectsToInternet" 
            name="connectsToInternet"
            value={props.connectsToInternet}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>
    </div>
    <div class="form-group">
        <label htmlFor="carrier"> Who is your smartphone carrier?</label>
        <input
            className="form-control"
            id="carrier"
            name="carrier"
            placeholder="Enter name of smartphone carrier"
            type="text"
            value={props.carrier}
            onChange={props.handleChange}
        />
    </div>
    <div class="form-group">
        <label htmlFor="">Do you periodically buy data plans for your smartphone?</label>
        <select 
            className="form-control"
            id="deviceAmount" 
            name="deviceAmount"
            value={props.deviceAmount}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>
    </div>
    <div class="form-group">
        <label htmlFor="hotspot">Do you ever use your smartphone as a “hotspot” to connect another
            device to the Internet?</label>
        <select 
            className="form-control"
            id="hotspot" 
            name="hotspot"
            value={props.hotspot}
            onChange={props.handleChange}
        >
            <option name="yes">Yes</option>
            <option name="no">No</option>    
        </select>
    </div>
    </container>
  );
}
export default Step2;