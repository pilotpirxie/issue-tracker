import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Board from '../Board';

export function AppSwitch() {
  return (
    <Switch>
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
