import React from 'react';

import About from '../../../components/about/About';
import Experience from '../../../components/experience/Experience';
import Skills from '../../../components/skills/Skills';
import SocialMedia from '../../../components/social_media/SocialMedia';

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
        <SocialMedia />
      </div>
      <div className="a2">
        Image here
      </div>
    </div>
  </div>
);

export default Home;