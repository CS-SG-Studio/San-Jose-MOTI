function Questionnaire3() {
  return (
    <>
      <container>
        <form className="form">
          <div className="form-control">
            <label htmlFor="household">
              How many people luve in your home?
            </label>
            <input type="number" id="household" name="household"></input>
            <label htmlFor="children">How many children do you have?</label>
            <input type="number" id="household" name="household"></input>
            <br />
            <label>If you have a child/children in school: </label> <br />
            <label htmlFor="school">
              Does the school provide a computing device for your child/children
              in class?
            </label>
            <br />
            <input type="radio" id="yes1" name="school" value="yes" />
            <label for="yes1">Yes</label>
            <input type="radio" id="no1" name="school" value="no" />
            <label for="no1">No</label>
            <br />
            <label htmlFor="home">
              Is your child/children allowed to bring home the device to do
              homework and to be used by the family?
            </label>
            <br />
            <input type="radio" id="yes2" name="home" value="yes" />
            <label for="yes2">Yes</label>
            <input type="radio" id="no2" name="home" value="no" />
            <label for="no2">No</label>
          </div>
          
        </form>
      </container>
      <div>
        <button type="submit">BACK</button>
        <button type="submit">SUBMIT</button>
      </div>
    </>
  );
}

export default Questionnaire3;
