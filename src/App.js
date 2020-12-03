import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Home from './components/pages/home/Home';
import Contacts from './components/pages/contacts/Contacts';

import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  </Router>
);

export default App;
