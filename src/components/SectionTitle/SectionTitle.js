import React from 'react';
import classnames from 'classnames';
import ProgressBar from '../ProgressBar';
import s from './SectionTitle.module.css';

const SectionTitle = ({ title, total, completed, className }) => {
  const rootClassName = classnames(s.root, className);

  return (
    <div className={rootClassName}>
      { title && <h2 className={s.title}>{title}</h2> }
      { total && <ProgressBar current={completed} total={total} /> }
    </div>
  );
};

export default SectionTitle;
