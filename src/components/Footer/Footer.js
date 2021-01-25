import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import s from './Footer.module.css';

const Footer = () => {
  const history = useHistory();

  return (
    <footer className={s.root}>
      <div className={s.content}>
        <h4 className={s.title}>Need more than a checklist?</h4>
        <p className={s.text}>We offer in-house workshops including front-end & design architecture, covering best practices and team-specific scenarios.</p>
        <Button text="Contact us" onClick={() => history.push('/contact/')}/>
      </div>
    </footer>
  );
};
  
export default Footer;
