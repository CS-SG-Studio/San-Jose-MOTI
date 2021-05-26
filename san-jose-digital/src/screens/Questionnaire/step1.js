function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <container>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            value={props.name}
            onChange={props.handleChange}
        />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleChange}
        />
    </div>
    <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input
            className="form-control"
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter phone number"
            value={props.phone}
            onChange={props.handleChange}
        />
    </div>
    <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
            className="form-control"
            id="address"
            name="address"
            type="textarea"
            placeholder="Enter address"
            value={props.address}
            onChange={props.handleChange}
            />
    </div>
    <div className="form-group">
        <label htmlFor="zip_code">Zip Code</label>
        <input
            className="form-control"
            id="zip_code"
            name="zip_code"
            type="text"
            placeholder="Enter zip code"
            value={props.zip_code}
            onChange={props.handleChange}
            />
    </div>
    <div className="form-group">
        <label htmlFor="identity">I am filling this on behalf of</label>
        <select 
            className="form-control" 
            id="identity" 
            name="identity" 
            value={props.identity}
            onChange={props.handleChange}
        >
            <option name="self">Myself</option>
            <option name="else">Someone else</option>
        </select>
    </div>
    
    </container>
  );
}

export default Step1;
