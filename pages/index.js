import React from "react";
import Link from "next/link";
import Layout from "../src/components/Layout";
import Button from "../src/components/Button";
import Hero from "../src/components/Hero";
import SectionTitle from "../src/components/SectionTitle";
import ArrowRightIcon from "../src/icons/arrowRight";
import data from "../src/data";
import { useCheckedIds } from "../src/utilities/checklistsContext";
import s from "./index.module.css";

const HomeRoute = (props) => {
  const { tCore, tContent } = props;
  const keys = Object.keys(data);
  const items = keys.map((k) => data[k]);
  const { checkedIds } = useCheckedIds();

  const renderItem = (item) => {
    let total = 0;
    let completed = 0;

    item.sections.forEach((section) => {
      total += section.checklist.length;
      completed += section.checklist.filter((item) =>
        checkedIds.includes(item.id)
      ).length;
    });

    return (
      <Link href={`/category/${item.id}/`} className={s.listItem} key={item.id}>
        <a>
          <SectionTitle
            title={tContent?.[item.id]?.title}
            key={item.id}
            total={total}
            completed={completed}
          />
          <div className={s.arrowRight}>
            <ArrowRightIcon />
          </div>
        </a>
      </Link>
    );
  };

  return (
    <Layout tCore={tCore}>
      <div className={s.container}>
        <Hero title={tCore.heroTitle} subtitle={tCore.heroSubtitle}>
          <Link href="/category/design-language">
            <Button text={tCore.heroAction} />
          </Link>
        </Hero>
        <ul className={s.list}>{items.map(renderItem)}</ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const tCore = (await import(`../src/translations/${locale}/core`)).default;
  const tContent = (await import(`../src/translations/${locale}/content`))
    .default;

  return {
    props: { tCore, tContent },
  };
}

export default HomeRoute;
