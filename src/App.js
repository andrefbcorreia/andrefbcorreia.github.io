import React from 'react';

import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';

import './App.css';

const App = () => (
  <div className="wrapper">
    <div className="app_container">
      <div className="app_content">
        <div className="a1">
          <About />
          <div className="app_child">
            <Experience />
            <Skills />
          </div>
        </div>
      </div>
  </div>
  </div>
);

export default App;
