import React from 'react';
import image from './assets/images/andre.jpeg';

import About from './components/about/About';
import Skills from './components/skills/Skills';
import SocialMedia from './components/socialmedia/SocialMedia';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <img className={styles.photo} src={image} alt=""/>
      <div className={styles.bio}>
        <div className={styles.profile_name}>André Correia</div>
        <div className={styles.profile_job}>Software Engineer</div>
        <About />
        <Skills />
        <SocialMedia />
      </div>
    </div>
  </div>
);

export default App;
