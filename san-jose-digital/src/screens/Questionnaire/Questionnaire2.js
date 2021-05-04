function Questionnaire2() {
  return (
    <>
      <container>
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
              CalFresh (food stamps) or Supplemental Nutrition Assistance
              Program (SNAP) Recipient
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
            <input
              type="checkbox"
              id="medical"
              name="programs"
              value="medical"
            />
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
        </form>
      </container>
      <div>
        <button type="submit">BACK</button>
        <button type="submit">NEXT</button>
      </div>
    </>
  );
}

export default Questionnaire2;
