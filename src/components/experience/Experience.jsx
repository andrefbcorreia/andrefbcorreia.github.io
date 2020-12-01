import React from 'react';

import Card from '../shared/card/Card';

const EXPERIENCES = [
  { title: 'Software Engineer', company: 'Google iNC', date: 'Sep 14 - Jun 18' },
  { title: 'Software Engineer', company: 'Google iNC', date: 'Aug 18 - Jan 20' },
  { title: 'Software Engineer', company: 'Google iNC', date: 'Feb 20 - May 21' },
];
const Experience = () => (
  <div>
    <div>Experience</div>
    <div>
      {EXPERIENCES.map((exp, key) => (
        <Card key={key} {...exp} />
      ))}
    </div>
  </div>
);

export default Experience;
