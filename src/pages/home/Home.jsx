import React from 'react';
import logo from '../../assets/a.jpg';

import About from '../../components/about/About';
import Experience from '../../components/experience/Experience';
import Skills from '../../components/skills/Skills';

import './Home.css';

const Home = () => (
  <div className="app_container">
    <div className="app_content">
      <div className="a1">
        <About />
        <div className="app_child">
          <Experience />
          <Skills />
        </div>
      </div>
      <div className="a2">
        <img className="a2-img" src={logo} alt='' />
      </div>
    </div>
  </div>
);

export default Home;