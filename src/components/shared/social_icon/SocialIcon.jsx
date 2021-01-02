import React from 'react';

import './SocialIcon.css';

const SocialIcon = ({ link, title, children }) => (
  <div className="social_icon_container" onClick={() => window.open(link, '_blank')}>
    {children}
    {title && (
      <p className="social_icon_title">{title}</p>
      )}
  </div>
);

export default SocialIcon;