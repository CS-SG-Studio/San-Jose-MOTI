import "./QuestionnaireStyles.css";

function Questionnaire1() {
  return (
    <div className="container">
      <div className="questions">
        <header className="header"> QUESTIONNAIRE </header>
        <p className="subheader">
          Fill out the following questionnaire to get matched with grantee
          organization(s).
        </p>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName"> Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your name..."
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email"> E-Mail: </label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div className="form-control">
            <label htmlFor="phone"> Phone: </label>
            <input type="number" id="phone" name="phone"></input>
          </div>
          <div className="form-control">
            <label htmlFor="address"> Address: </label>
            <input type="textarea" id="address" name="address"></input>
          </div>
          <div className="form-control">
            <label htmlFor="zip"> Zip Code: </label>
            <input type="number" id="zip" name="zip"></input>
          </div>
          <div className="form-control">
            <label htmlFor="contact"> I am filling this on behalf of: </label>
            <br />
            <input type="radio" id="contact" name="contact" value="self" />
            <label htmlFor="contact">Myself</label>
            <br />
            <input type="radio" id="someone" name="contact" value="someone" />
            <label htmlFor="someone">
              Someone else (please specify)
              <input type="text" id="someone" name="contact"></input>
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="contact"> What is your primary language: </label>
            <br />
            <input type="radio" id="english" name="language" value="english" />
            <label htmlFor="english">English</label>
            <br />
            <input type="radio" id="spanish" name="language" value="spanish" />
            <label htmlFor="spanish">Spanish</label>
            <br />
            <input
              type="radio"
              id="vietnamese"
              name="language"
              value="vietnamese"
            />
            <label htmlFor="vietnamese">Vietnamese</label>
            <br />
            <input type="radio" id="other1" name="language" value="other1" />
            <label htmlFor="other">
              Other (please elaborate)
              <input type="text" id="other" name="contact"></input>
            </label>
          </div>
        </form>
        <div>
          <button type="submit">NEXT</button>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire1;
