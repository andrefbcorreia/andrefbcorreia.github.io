import React from 'react';

import About from './components/about/About';
import Skills from './components/skills/Skills';

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
          <div className="c">
            <a href="https://www.linkedin.com/in/andrefbcorreia/" target='_blank' rel="noreferrer">
              <FaLinkedinIn size={22} className="react-icon"/>
            </a>
          </div>
          <div className="c">
            <a href="https://github.com/andrefbcorreia" target='_blank' rel="noreferrer">
              <FaGithub size={22} className="react-icon" />
            </a>
          </div>
          <div className="c">
            <a href="mailto:andrefbcorreia@gmail.com">
              <IoMailOutline size={24} className="react-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
