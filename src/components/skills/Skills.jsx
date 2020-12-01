import React from 'react';
import Badge from '../shared/badges/Badge';

import './Skills.css';

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

const Skills = () => (
  <div className="about_container">
    <div className="title">What Skill I have</div>
    <div className="list">
      {SKILLS.map((skill, key) => (
        <Badge key={key} skill={skill} />
      ))}
    </div>
  </div>
);

export default Skills;