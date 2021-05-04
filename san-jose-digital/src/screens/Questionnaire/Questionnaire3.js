import React from 'react';
import { 
  BrowserRouter as Router,
  Link 
} from 'react-router-dom';

const Questionnaire3 = () => {
  return (
    <Router>
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
        <Link type="submit">BACK</Link>
        <Link type="submit">SUBMIT</Link>
      </div>
    </Router>
  );
}

const Back = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Questionnaire2'>BACK</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Questionnaire3;
