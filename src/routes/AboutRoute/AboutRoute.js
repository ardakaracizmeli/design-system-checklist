import React from 'react';
import Hero from '../../components/Hero';
import s from './AboutRoute.module.css';

const AboutText = () => {
  return (
    <p className={s.text}>
      Hello, we're <a className={s.link} href="https://twitter.com/ArdaKaracizmeli" target="_blank" rel="noopener noreferrer">@ArdaKaracizmeli</a>, <a className={s.link} href="https://twitter.com/blvdmitry" target="_blank" rel="noopener noreferrer">@DmitryBelyaev</a>, and <a className={s.link} href="mailto:steven.a.baguley@gmail.com">@StevenBaguley</a>.
      <br />
      <br />
      There’s lots of similarities in every design system. We should know, we’ve worked on them for a long time.
      This website is a collection of best practices to help you build extensive and robust design systems wherever you work.
      <br />
      <br />
      Our categories might not look like the system you’ve planned or already have.
      But this website isn’t meant to be a definitive list of items for every design system,
      it's a guideline for you to keep track of all the requirements you’ll want to check off to provide a solid user experience.
      <br />
      <br />
      Everything you see on this website is open source. If you would like to see additional
      content on this website or if you have feedback, please <a className={s.link} href="https://github.com/ardakaracizmeli/design-system-checklist" target="_blank" rel="noopener noreferrer">contribute</a>.
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
