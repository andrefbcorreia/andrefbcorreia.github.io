import React from 'react';

import './About.css';

const About = () => (
  <div className="about_container">
    <div className="about_title">
      <span>About </span> 
      <span className="about_title_me">Me</span>
    </div>
    <div className="about_description">
      <p>
        My name is <span>André Correia</span>, I was born in Switzerland, lived most of my life in the shiny south of Portugal 
        and I am a <span>Software Engineer</span> currently working in Lisbon.
      </p>
      <p>
        In high school, I started to enjoy programming and that's why I took <span>Computer Science</span> in 
        <span> FCT NOVA Lisboa</span>, where I develop my knowledge base and passion for building beautiful and 
        functional web applications.
      </p>
      <p>
        I've been mainly working as a <span>full stack</span> developer with technologies such as <span>React JS</span>, 
        <span> Node JS</span> and <span>Ruby on Rails</span> in projects that involve a large codebase, 
        teamwork, unit tests and code reviews.
      </p>
      <p>
        Besides that, I love to travel, going to the beach, gym, hanging out with friends, watch series,
        play football and computer games.
      </p>
    </div>
  </div>
);

export default About;