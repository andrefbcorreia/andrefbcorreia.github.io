import React from 'react';
import Badge from '../shared/badges/Badge';

import './About.css';

const SKILLS = [
  "AAAAA",
  "BBBBB",
  "CCCCC",
  "DDDDD",
  "AAAAA",
  "BBBBB",
  "CCCCC",
  "DDDDD",
];

const About = () => (
  <div className="about_container">
    <div className="title">What Skill I have</div>
    <div className="list">
      {SKILLS.map((skill, key) => (
        <Badge key={key} skill={skill} />
      ))}
    </div>
  </div>
);

export default About;