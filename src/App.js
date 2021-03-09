import React from 'react';

import About from './components/about/About';
import Skills from './components/skills/Skills';

import image from './assets/images/andre.jpeg';

import './App.css';

const App = () => (
  <div className="container">
    <div className="content">
      <img className="me" src={image} alt=""/>
      <div className="bio">
        <div className="title">
          <div className="profile-name">André Correia</div>
          <div className="profile-job">Software Engineer</div>
        </div>
        <About />
        <Skills />
      </div>
    </div>
    <div className="line" />
  </div>
)


export default App;
