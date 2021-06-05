import React from 'react';
import './App.scss';
import Rooms from './modules/Rooms';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Reservations from './modules/Reservations';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Rooms />
        </Route>
        <Route path="/:roomId">
          <Reservations />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
