import React from 'react';
import Badge from '../shared/badges/Badge';

import './Skills.css';

const SKILLS = [
  "JavaScript",
  "React JS",
  "Redux",
  "Hooks",
  "Node JS",
  "Ruby on Rails",
  "RSpec",
  "Capybara",
  "Enzyme",
  "PostgreSQL",
  "MySQL",
  "Git",
  "Code review",
];

const Skills = () => (
  <div className="skills_container">
    <div className="skills_list">
      {SKILLS.map((skill, key) => (
        <Badge key={key} skill={skill} />
      ))}
    </div>
  </div>
);

export default Skills;