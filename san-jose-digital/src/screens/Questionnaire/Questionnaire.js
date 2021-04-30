function Questionnaire() {
  return (
    <>
      <header> QUESTIONNAIRE </header>
      <p>
        Fill out the following questionnaire to get matched with grantee
        organization(s).
      </p>
      <container>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName"> Name : </label>
            <input type="text" id="firstName" name="firstName"></input>
          </div>
          <div className="form-control">
            <label htmlFor="email"> E-Mail : </label>
            <input type="email" id="email" name="firstName"></input>
          </div>
          <div className="form-control">
            <label htmlFor="phone"> Phone : </label>
            <input type="number" id="phone" name="phone"></input>
          </div>
          <div className="form-control">
            <label htmlFor="contact"> I am filling this on behalf of : </label>
            <br />
            <input type="radio" id="contact" name="contact" value="self" />
            <label for="contact">Myself</label>
            <br />
            <input type="radio" id="someone" name="contact" value="someone" />
            <label for="someone">
              Someone else (please specify)
              <input type="text" id="someone" name="contact"></input>
            </label>
          </div>
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
        <button type="submit">NEXT</button>
        <button type="submit">SUBMIT</button>
      </div>
    </>
  );
}

export default Questionnaire;
