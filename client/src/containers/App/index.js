import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Board from '../Board';
import HomePage from '../HomePage';

export function AppSwitch() {
  return (
    <Switch>
      <Route
        path="/"
        exact
      >
        <HomePage />
      </Route>
      <Route path="/boards/:boardId/:boardKey">
        <Board />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <AppSwitch />
    </Router>
  );
}

export default App;
