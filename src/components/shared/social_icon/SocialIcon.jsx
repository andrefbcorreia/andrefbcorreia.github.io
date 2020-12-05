import React from 'react';

import './SocialIcon.css';

const SocialIcon = ({ link, children }) => (
  <a href={link} target='_blank' rel="noreferrer">
    {children}
  </a>
);

export default SocialIcon;