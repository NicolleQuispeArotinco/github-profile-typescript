import React,{ Suspense } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// import Main from "./features/Main";
// import User from "./features/User"
const Main = React.lazy(() => import("./features/Main"));
const User = React.lazy(() => import("./features/User"))



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/:login" component={User}/>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
