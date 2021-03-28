import React from 'react';

import styles from './SMCard.module.scss';

const SMCard = ({
  link,
  icon,
}) => (
  <div className={styles.social_media_content}>
    <a href={link} target='_blank' rel="noreferrer">
      {icon}
    </a>
  </div>
)

export default SMCard;