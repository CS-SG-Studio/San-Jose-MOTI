import React from 'react';
import { 
  BrowserRouter as Router,
  Link 
} from 'react-router-dom';

// function Questionnaire() {
const Questionnaire = () => {
  return (
    <Router>
    <div>
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
        </form>
      </container>
      <div>
        <Link to='/Questionnaire2'>NEXT</Link>
      </div>
    </div>
    </Router>
  );
}

const Next = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/Questionnaire2'>NEXT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Questionnaire;
