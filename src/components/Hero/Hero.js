import React from 'react';
import s from './Hero.module.css';

const Hero = ({ title, subtitle, children }) => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.subtitle}>{subtitle}</div>
      { children && <div className={s.content}>{ children }</div> }
    </div>
  );
};

export default Hero;
