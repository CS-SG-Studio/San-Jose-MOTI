function Questionnaire3() {
  return (
    <>
      <container>
        <form className="form">
          <div className="form-control">
            <label htmlFor="contact"> What is your primary language : </label>
            <br />
            <input type="radio" id="english" name="language" value="english" />
            <label for="english">English</label>
            <br />
            <input type="radio" id="spanish" name="language" value="spanish" />
            <label for="spanish">Spanish</label>
            <br />
            <input
              type="radio"
              id="vietnamese"
              name="language"
              value="vietnamese"
            />
            <label for="vietnamese">Vietnamese</label>
            <br />
            <input type="radio" id="other1" name="language" value="other1" />
            <label for="other">
              Other (please eloborate)
              <input type="text" id="other" name="contact"></input>
            </label>
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
