import React from 'react';
import {
  Switch,
  Route
} 
from 'react-router-dom';
import Questionnaire from '../Step2Questionnaire/Questionnaire';
import Questionnaire2 from './Questionnaire2';
import Questionnaire3 from './Questionnaire3';
import Congratulations from './Congratulations';

// function Questionnaire() {
const router = () => {
  return (
        <Switch>
            <Route path="/questionnaire">
                <Questionnaire/>
            </Route>
            <Route path="/questionnaire2">
              <Questionnaire2 />
            </Route>
            <Route path="/questionnaire3">
              <Questionnaire3 />
            </Route>
            <Route path="/congratulations">
              <Congratulations />
            </Route>
        </Switch>

  );
}

export default router;
