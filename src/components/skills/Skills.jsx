import React from 'react';
import Badge from '../shared/badges/Badge';

import './Skills.css';

const SKILLS = [
  "React JS",
  "Redux",
  "Hooks",
  "Node JS",
  "Ruby On Rails",
  "RSpec",
  "Capybara",
  "Enzyme",
  "MySql",
  "PostgreSQL",
  "Git",
  "Code Review",
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