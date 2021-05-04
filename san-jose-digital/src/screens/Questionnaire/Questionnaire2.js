function Questionnaire2() {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label>
            Do you currently qualify for any of the following programs? Please
            check any that may apply.
          </label>
          <br />
          <input
            type="checkbox"
            id="childenrolledinNSLP"
            name="programs"
            value="childenrolledinNSLP"
          />
          <label for="childenrolledinNSLP">
            Child Enrolled in the NSLP (National School Lunch Program)
          </label>
          <br />
          <input
            type="checkbox"
            id="childenrolledinNSLP"
            name="programs"
            value="childenrolledinNSLP"
          />
          <label for="childenrolledinNSLP">
            Child Enrolled in the NSLP (National School Lunch Program)
          </label>
          <br />
          <input
            type="checkbox"
            id="CalFreshorSNAP"
            name="programs"
            value="CalFreshorSNAP"
          />
          <label for="CalFreshorSNAP">
            CalFresh (food stamps) or Supplemental Nutrition Assistance Program
            (SNAP) Recipient
          </label>
          <br />
          <input
            type="checkbox"
            id="SSIorSSDI"
            name="programs"
            value="SSIorSSDI"
          />
          <label for="SSIorSSDI">
            Supplemental Security Income (SSI) or Social Security Disability
            Insurance (SSDI) Recipient
          </label>
          <br />
          <input type="checkbox" id="medical" name="programs" value="medical" />
          <label for="medical">Medi-Cal Recipient</label>
          <br />
          <input
            type="checkbox"
            id="lowincome"
            name="programs"
            value="lowincome"
          />
          <label for="lowincome">Household Income Under $70,000/year</label>
          <br />
        </div>
        <div className="form-control">
          <label htmlFor="device">
            Do you have a working computing device (such as a desktop, laptop,
            or tablet) at home?
          </label>
          <br />
          <input type="radio" id="yes" name="device" value="yes" />
          <label for="yes">Yes</label>
          <br />
          <input type="radio" id="no" name="device" value="no" />
          <label for="no">No</label>
          <br />
          <label htmlFor="devicekind">What kind of devices?</label>
          <input
            type="checkbox"
            id="desktop"
            name="devicekind"
            value="desktop"
          />
          <label for="laptop">Desktop</label>
          <input type="checkbox" id="laptop" name="devicekind" value="laptop" />
          <label for="laptop">Laptop</label>
          <input type="checkbox" id="tablet" name="devicekind" value="tablet" />
          <label for="tablet">Tablet</label>
          <br />
          <label htmlFor="deviceage">What kind of devices?</label>
          <input type="checkbox" id="<1" name="deviceage" value="<1" />
          <label for="<1">Less than a year</label>
          <input type="checkbox" id="1-3" name="deviceage" value="1-3" />
          <label for="1-3">1-3 years</label>
          <input type="checkbox" id=">3" name="deviceage" value=">3" />
          <label for=">3">More than 3 years</label>
          <br />
          <label htmlFor="deviceamount">
            How many devices do you have in your home?
          </label>
          <input type="number" id="deviceamount" name="deviceamount"></input>
        </div>
      </form>
      <div>
        <button type="submit">BACK</button>
        <button type="submit">NEXT</button>
      </div>
    </>
  );
}

export default Questionnaire2;
