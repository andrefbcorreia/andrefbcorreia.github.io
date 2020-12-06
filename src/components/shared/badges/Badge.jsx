import React from 'react';
import './Badge.css';

const Badge = ({ skill }) => (
  <span className="skill_container">
    {skill}
  </span>
);

export default Badge;
