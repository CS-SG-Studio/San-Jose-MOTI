import React from 'react';
import { 
  BrowserRouter as Router,
  Link 
} from 'react-router-dom';

const Questionnaire2 = () => {
  return (
    <Router>
      <container>
        <form className="form">
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
        </form>
      </container>
      <div>
        <Link type="submit">BACK</Link>
        <Link type="submit">NEXT</Link>
      </div>
    </Router>
  );
}

const Back = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Questionnaire'>BACK</Link>
        </li>
      </ul>
    </nav>
  );
};

const Next = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Questionnaire3'>NEXT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Questionnaire2;
