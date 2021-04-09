import React from 'react';
import Hero from '../../components/Hero';
import s from './AboutRoute.module.css';

const AboutText = () => {
  return (
    <p className={s.text}>
      Hello, we're <a className={s.link} href="https://twitter.com/ArdaKaracizmeli" target="_blank" rel="noopener noreferrer">@ArdaKaracizmeli</a>, <a className={s.link} href="https://twitter.com/blvdmitry" target="_blank" rel="noopener noreferrer">@blvdmitry</a> and <a className={s.link} href="https://www.linkedin.com/in/steven-baguley-a59661a8/" target="_blank" rel="noopener noreferrer">@StevenBaguley</a>.
      <br />
      <br />
      We’ve been working on design systems for a long time. And we’ve spotted the similarities they all share. This website is a collection of best practices to help you build extensive and robust design systems wherever you work.
      <br />
      <br />
      Our categories might not look exactly like the system you’ve planned (or already have). But this isn’t meant to be a definitive list of items for every design system. It's a set of guidelines for you to keep track of everything you’ll want to check off to provide a solid user experience.
      <br />
      <br />
      Everything you see here is open source. If you’d like to see additional content on this website or if you have feedback, please <a className={s.link} href="https://github.com/ardakaracizmeli/design-system-checklist" target="_blank" rel="noopener noreferrer">contribute</a>.
    </p>
  );
}

const AboutRoute = () => {
  return (
    <div className={s.container}>
      <Hero
        title="About"
        subtitle={AboutText()}
      />
    </div>
  );
  
};

export default AboutRoute;
