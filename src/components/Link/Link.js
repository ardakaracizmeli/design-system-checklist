import React from 'react';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';
import s from './Link.module.css';

const Link = ({ title, url }) => {
  return (
    <a className={s.link} href={url} target="_blank" rel="noopener noreferrer">
      <ArrowRight className={s.arrowRight} />
      {title}
    </a>
  );
};

export default Link;
