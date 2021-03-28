import React from 'react';
import Badge from '../shared/badges/Badge';

import styles from './Skills.module.scss';

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
  <div className={styles.skills_list}>
    {SKILLS.map((skill, key) => (
      <Badge key={key} skill={skill} />
    ))}
  </div>
);

export default Skills;