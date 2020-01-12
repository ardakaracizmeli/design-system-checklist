import React from 'react';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import s from './WorkshopRoute.module.css';

const WorkshopRoute = () => {
  const text = (
    <p className={s.text}>
      We can help with the critical decisions you make when building a design system. We offer in-house workshops including front-end & design architecture, covering best practices and team-specific scenarios.
      <br /><br />
      Our past experience includes building systems for companies of all sizes and guiding their system implementations from day one — we’ll have you covered. Let's talk about how we can help make your design system better.
    </p>
  );

  return (
    <div className={s.container}>
      <Hero title="Need more guidance?" subtitle={text}>
        <Button text="Contact us" href="mailto:blv.dmitry@gmail.com?cc=ardakaracizmeli@gmail.com" />
      </Hero>
    </div>
  );
};

export default WorkshopRoute;
