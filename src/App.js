import React from 'react';

import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';

import './App.css';

const SocialMedia = () => <div>Social Media</div>

const App = () => (
  <div className="app_container">
    <Header />
    <div>
      <About />
      <div className="app_child">
        <Experience />
        <Skills />
      </div>
    </div>
    <SocialMedia />
  </div>
);

export default App;
