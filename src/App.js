import React from 'react';

import About from './components/about/About';
import Skills from './components/skills/Skills';
import SMCard from './components/smcard/SMCard';

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

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
        <div className="social-media">
          <SMCard 
            link="https://www.linkedin.com/in/andrefbcorreia/"
            icon={<FaLinkedinIn size={22} className="react-icon"/>}
          />
          <SMCard
            link="https://github.com/andrefbcorreia"
            icon={<FaGithub size={22} className="react-icon" />}
          />
          <SMCard
            link="mailto:andrefbcorreia@gmail.com"
            icon={<IoMailOutline size={24} className="react-icon" />}
          />
        </div>
      </div>
    </div>
  </div>
);

export default App;
