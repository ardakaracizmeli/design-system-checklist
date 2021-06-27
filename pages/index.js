import React from 'react';
import Link from 'next/link';
import Button from '../src/components/Button';
import Hero from '../src/components/Hero';
import SectionTitle from '../src/components/SectionTitle';
import ArrowRightIcon from "../src/icons/arrowRight";
import data from '../src/data';
import { useCheckedIds } from '../src/utilities/checklistsContext';
import s from './index.module.css';

const HomeRoute = () => {
  const keys = Object.keys(data);
  const items = keys.map(k => data[k]);
  const { checkedIds } = useCheckedIds();

  const renderItem = (item) => {
    let total = 0;
    let completed = 0;

    item.sections.forEach(section => {
      total += section.checklist.length;
      completed += section.checklist.filter(item => checkedIds.includes(item.id)).length;
    });

    return (
      <Link href={`/category/${item.id}/`} className={s.listItem} key={item.id}>
        <a>
          <SectionTitle title={item.title} key={item.id} total={total} completed={completed} />
          <div className={s.arrowRight}><ArrowRightIcon /></div>
        </a>
      </Link>
    );
  };

  return (
    <React.Fragment>
      <div className={s.container}>
        <Hero
          title="Build better design systems"
          subtitle="An open-source checklist to help you plan, build and grow your design system."
        >
          <Link href="/category/design-language">
            <Button text="Get started" />
          </Link>
        </Hero>
        <ul className={s.list}>
          { items.map(renderItem) }
        </ul>
      </div>
    </React.Fragment>
  );
};

export default HomeRoute;
