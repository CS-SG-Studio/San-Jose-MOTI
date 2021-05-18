import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import Questionnaire from './Questionnaire'
import Questionnaire2 from './Questionnaire2';

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
          </Switch>

  );
}

export default router;
