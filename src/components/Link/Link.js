import React from 'react';
import IconArrowRight from '../../icons/arrowRight';
import s from './Link.module.css';

const Link = ({ title, url }) => {
  return (
    <a className={s.link} href={url} target="_blank" rel="noopener noreferrer">
      <span className={s.arrowRight}>
        <IconArrowRight />
      </span>
      {title}
    </a>
  );
};

export default Link;
