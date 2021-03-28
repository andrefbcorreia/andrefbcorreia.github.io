import React from 'react';
import styles from './Badge.module.scss';

const Badge = ({ skill }) => (
  <span className={styles.skill_container}>
    {skill}
  </span>
);

export default Badge;
