import React from 'react';
import { Link } from 'react-router-dom';
import s from './CategoryNav.module.css';

const CategoryNav = ({ previous, next }) => {
  return (
    <div className={s.root}>
      <div className={s.item}>
        {
          previous && (
            <React.Fragment>
              <small className={s.overline}>Previous</small>
              <Link className={s.link} to={previous.url}>{previous.text}</Link>
            </React.Fragment>
          )
        }
      </div>
      <div className={s.item}>
        {
          next && (
            <React.Fragment>
              <small className={s.overline}>Next</small>
              <Link className={s.link} to={next.url}>{next.text}</Link>
            </React.Fragment>
          )
        }
      </div>
    </div>
  );
};

export default CategoryNav;
