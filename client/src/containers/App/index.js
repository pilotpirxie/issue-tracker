import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Board from '../Board';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/boards/:boardId/:boardKey"
        >
          <Board />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
