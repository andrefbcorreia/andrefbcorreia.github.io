import React from 'react';
import Card from '../shared/card/Card';

import './Experience.css';

const EXPERIENCES = [
  { title: 'FullStack Developer', company: 'iCapital Network', date: 'Nov 20 - Present' },
  { title: 'FullStack Developer', company: 'Runtime Revolution', date: 'Jul 19 - Nov 20' },
  { title: 'FullStack Developer', company: 'RHP Consulting', date: 'Oct 17 - Jun 19' },
];
const Experience = () => (
  <div className="experience_container">
    <div className="experience_title">Experience</div>
    <div>
      {EXPERIENCES.map((exp, key) => (
        <Card key={key} {...exp} />
      ))}
    </div>
  </div>
);

export default Experience;
