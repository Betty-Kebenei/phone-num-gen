import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './components/common/header';
import GenerateNumbers from './components/generateNumbers/GenerateNumbers';
import PhoneNumbers from './components/displayPhoneNumbers/PhoneNumbers';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={GenerateNumbers} />
      <Route path="/numbers" component={PhoneNumbers} />
    </div>
  </Router>
);

export default App;
