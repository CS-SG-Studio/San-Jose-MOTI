import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
// import Congratulations from './Congratulations';
// import Questionnaire2 from './Questionnaire2';

const Questionnaire3 = () => {
  return (
    <Router>
      <container>
        <form className="form">
          <div className="form-control">
            <label htmlFor="household">
              How many people live in your home?
            </label>
            <input type="number" id="household" name="household"></input> <br />
            <label htmlFor="children">How many children do you have?</label>
            <input type="number" id="household" name="household"></input>
            <br />
            <label>If you have a child/children in school: </label> <br />
            <label htmlFor="school">
              Does the school provide a computing device for your child/children
              in class?
            </label>
            <input type="radio" id="yes1" name="school" value="yes" />
            <label for="yes1">Yes</label>
            <input type="radio" id="no1" name="school" value="no" />
            <label for="no1">No</label>
            <br />
            <label htmlFor="home">
              Is your child/children allowed to bring home the device to do
              homework and to be used by the family?
            </label>
            <input type="radio" id="yes2" name="home" value="yes" />
            <label for="yes2">Yes</label>
            <input type="radio" id="no2" name="home" value="no" />
            <label for="no2">No</label>
          </div>
          <div>
            <label htmlFor="internetaccess">
              Do you access the Internet at home?
            </label>
            <input type="radio" id="yes" name="internetaccess" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="internetaccess" value="no" />
            <label for="no">No</label>
            <br />
            <label>If you access the Internet at home: </label> <br />
            <label htmlFor="cost">
              What is the monthly cost of your Internet service?
            </label>
            <br />
            <input type="radio" id="1" name="cost" value="1" />
            <label for="1">$9.99 or less</label>
            <input type="radio" id="2" name="cost" value="2" />
            <label for="2">$10 - $14.99</label>
            <input type="radio" id="3" name="cost" value="3" />
            <label for="3">$15 - $20.99</label>
            <input type="radio" id="4" name="cost" value="4" />
            <label for="4">$21 or more</label> <br />
            <label htmlFor="provider">
              Who is your Internet Service Provider?
            </label>
            <input type="text" id="provider" name="provider"></input> <br />
            <label>If you do NOT access the Internet at home: </label> <br />
            <label for="internetuse"> Do you use the Internet at: </label>
            <input type="radio" id="work" name="internetuse" value="work" />
            <label for="work">Work</label>
            <input
              type="radio"
              id="library"
              name="internetuse"
              value="library"
            />
            <label for="library">Library</label>
            <input
              type="radio"
              id="Friend’s Home"
              name="internetuse"
              value="Friend’s Home"
            />
            <label for="Friend’s Home">Friend’s Home</label>
            <input type="radio" id="other" name="internetuse" value="other" />
            <label for="other">Other</label> <br />
            <label for="heardof">
              Have you heard about affordable home Internet offers?
            </label>
            <input type="radio" id="yes2" name="heardof" value="yes2" />
            <label for="yes2">Yes</label>
            <input type="radio" id="no2" name="heardof" value="no2" />
            <label for="no2">No</label> <br />
            <label for="learning">
              Are you interested in learning about affordable home Internet
              offers?
            </label>
            <input type="radio" id="yes3" name="learning" value="yes3" />
            <label for="yes2">Yes</label>
            <input type="radio" id="no3" name="learning" value="no3" />
            <label for="no3">No</label>
          </div>
          <div>
            <label htmlFor="experience">
              Do you have experience using a computing device?
            </label>
            <input type="radio" id="yes" name="experience" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="experience" value="no" />
            <label for="no">No</label>
          </div>
          <div>
            <label htmlFor="level">
              If you have experience using a computing device, do you consider
              yourself to be a:
            </label>
            <br />
            <input type="radio" id="beginner" name="level" value="beginner" />
            <label for="beginner">Beginner User</label>
            <input
              type="radio"
              id="intermediate"
              name="level"
              value="intermediate"
            />
            <label for="intermediate">Intermediate User</label>
            <input type="radio" id="advanced" name="level" value="advanced" />
            <label for="advanced">Advanced User</label>
          </div>
          <div>
            <label htmlFor="classes">
              Are you interested in learning about FREE computer classes?
            </label>
            <input type="radio" id="yes" name="classes" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="classes" value="no" />
            <label for="no">No</label>
          </div>
        </form>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/questionnaire2">BACK</Link>
            </li>
            <li>
              <Link to="/congratulations">SUBMIT</Link>
            </li>
          </ul>
        </nav>

          {/* <hr /> */}

          {/* <Switch>
            <Route exact path="/questionnaire2">
              <Questionnaire2 />
            </Route>
            <Route exact path="/congratulations">
              <Congratulations />
            </Route>
          </Switch> */}
        </div>
      </container>
    </Router>
  );
}

export default Questionnaire3;
