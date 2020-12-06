import React from 'react';
import SocialIcon from '../shared/social_icon/SocialIcon';
import { ReactComponent as GithubIcon } from '../../assets/svgs/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svgs/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svgs/instagram.svg'

import './SocialMedia.css';

const SocialMedia = () => (
  <div className="social_media_container">
    <SocialIcon link="https://www.linkedin.com/in/andrefbcorreia/">
      <LinkedinIcon />
    </SocialIcon>
    <SocialIcon link="https://github.com/andrefbcorreia">
      <GithubIcon />
    </SocialIcon>
    <SocialIcon link="https://www.instagram.com/andrecorreia__/">
      <InstagramIcon />
    </SocialIcon> 
  </div>
);

export default SocialMedia;
