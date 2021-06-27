import React from 'react';
import { useRouter } from "next/router";
import CategoryNav from '../../src/components/CategoryNav';
import Hero from '../../src/components/Hero';
import Section from '../../src/components/Section';
import data from '../../src/data';
import s from './category.module.css';

const CategoryRoute = () => {
  const { query } = useRouter();
  const { id } = query;
  const keys = Object.keys(data);
  const items = keys.map(k => data[k]);
  let previous;
  let next;
  const item = items.find((item, index) => {
    const isFound = item.id === id;

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
