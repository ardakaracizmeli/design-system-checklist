import React from 'react';
import CategoryNav from '../../components/CategoryNav';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import data from '../../data';
import s from './CategoryRoute.module.css';

const CategoryRoute = ({ match }) => {
  const keys = Object.keys(data);
  const items = keys.map(k => data[k]);
  const category = match.params.category;
  let previous;
  let next;
  const item = items.find((item, index) => {
    const isFound = item.id === category;

    if (isFound && items[index - 1]) previous = items[index - 1];
    if (isFound && items[index + 1]) next = items[index + 1];

    return isFound;
  });

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
        <CategoryNav
          next={next ? { text: next.title, url: `/category/${next.id}/` } : { text: 'Share your progress', url: '/share/' }}
          previous={previous && { text: previous.title, url: `/category/${previous.id}/` }}
        />
      </div>
    </div>
  );

};

export default CategoryRoute;
