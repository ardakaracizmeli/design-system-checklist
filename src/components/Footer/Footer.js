import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.content}>
        <h4 className={s.title}>Need more than a checklist?</h4>
        <p className={s.text}>We offer in-house workshops including front-end & design architecture, covering best practices and team-specific scenarios.</p>
        <Link href="/contact">
          <Button text="Contact us" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
