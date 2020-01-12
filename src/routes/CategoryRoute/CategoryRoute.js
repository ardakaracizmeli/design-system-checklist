import React from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import data from '../../data';
import s from './CategoryRoute.module.css';

const CategoryRoute = ({ match }) => {
  const keys = Object.keys(data);
  const items = keys.map(k => data[k]);
  const category = match.params.category;
  const item = items.find(o => o.id === category);

  if (!item) return null;

  const { title, description, sections } = item;

  return (

    <div className={s.container}>
      <Hero
        title={title}
        subtitle={description}
      />
      <div className={s.sections}>
        { sections.map(section => <Section key={section.title} section={section} />) }
      </div>
    </div>
  );

};

export default CategoryRoute;
