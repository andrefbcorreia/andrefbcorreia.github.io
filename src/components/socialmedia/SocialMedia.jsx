import React from 'react';

import SMCard from '../smcard/SMCard';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import styles from './SocialMedia.module.scss';

const SocialMedia = () => (
  <div className={styles.social_media}>
    <SMCard 
      link="https://www.linkedin.com/in/andrefbcorreia/"
      icon={<FaLinkedinIn size={22} className="react-icon"/>}
    />
    <SMCard
      link="https://github.com/andrefbcorreia"
      icon={<FaGithub size={22} className="react-icon" />}
    />
    <SMCard
      link="mailto:andrefbcorreia@gmail.com"
      icon={<IoMailOutline size={24} className="react-icon" />}
    />
  </div>
);

export default SocialMedia;