import React from 'react';

import './About.css';

const About = () => (
  <div className="about_container">
    <div className="about_title">
      <span>About </span> 
      <span className="about_title_me">ME</span>
    </div>
    <div className="about_subtitle">
      I'm André Correia, I'm a Software Engineer \n
      from Lisbon, Portugal
    </div>
    <div className="about_description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
    </div>
  </div>
);

export default About;