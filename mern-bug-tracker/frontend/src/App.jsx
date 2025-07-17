import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={BugList} />
          <Route path="/report" component={BugForm} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default App;