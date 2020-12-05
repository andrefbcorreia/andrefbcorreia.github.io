import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Contacts from './components/pages/contacts/Contacts';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  </Router>
);

export default App;
