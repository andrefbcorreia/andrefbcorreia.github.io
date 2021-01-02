import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';

import './App.css';

const App = () => (
  <HashRouter basename="">
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </div>
  </HashRouter>
);

export default App;
