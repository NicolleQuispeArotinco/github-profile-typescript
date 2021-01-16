import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from "./features/Main";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          {/* <Route exact path="/:login" component={User}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
