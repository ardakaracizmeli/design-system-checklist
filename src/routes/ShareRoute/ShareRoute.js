import React from 'react';
import Hero from '../../components/Hero';
import ExportButton from '../../components/ExportButton';
import s from './ShareRoute.module.css';

const ShareRoute = () => {
  return (
    <div className={s.container}>
      <Hero
        title="Spread the word"
        subtitle="Design systems are best built together. 
        This is why we've made it possible to share this checklist including the items you've
        already checked. Share your progress with your team so you can all keep track together."
      >
        <ExportButton />
      </Hero>
    </div>
  );
  
};

export default ShareRoute;
