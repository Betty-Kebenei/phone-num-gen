import React from 'react';
import './styles/App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './components/common/header';
import GenerateNumbers from './components/generateNumbers/GenerateNumbers';
import PhoneNumbers from './components/displayPhoneNumbers/PhoneNumbers';
import PageNotFound from './components/common/PageNotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={GenerateNumbers} />
        <Route path="/numbers" component={PhoneNumbers} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
