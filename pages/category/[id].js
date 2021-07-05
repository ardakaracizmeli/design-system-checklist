import React from "react";
import { useRouter } from "next/router";
import CategoryNav from "../../src/components/CategoryNav";
import Hero from "../../src/components/Hero";
import Section from "../../src/components/Section";
import Layout from "../../src/components/Layout";
import data from "../../src/data";
import s from "./category.module.css";

const CategoryRoute = (props) => {
  const { tCore, tContent } = props;
  const { query } = useRouter();
  const { id } = query;
  const keys = Object.keys(data);
  const items = keys.map((k) => data[k]);
  let previous;
  let next;
  const item = items.find((item, index) => {
    const isFound = item.id === id;
    const prevItem = items[index - 1];
    const nextItem = items[index + 1];

    if (isFound && prevItem)
      previous = { ...tContent[prevItem.id], id: prevItem.id };
    if (isFound && nextItem)
      next = { ...tContent[nextItem.id], id: nextItem.id };

    return isFound;
  });

  if (!item) return null;

  const { id: categoryId, sections } = item;
  const categoryTranslations = tContent[categoryId];

  return (
    <Layout tCore={tCore}>
      <div className={s.container}>
        <Hero
          title={categoryTranslations.title}
          subtitle={categoryTranslations.description}
        />
        <div className={s.sections}>
          {sections.map((section) => {
            const sectionTranslations =
              categoryTranslations.sections[section.id];

            const sectionData = {
              title: sectionTranslations.title,
              description: sectionTranslations.description,
              checklist: section.checklist.map((item) => ({
                id: item.id,
                title: sectionTranslations.checklist[item.id].title,
                description: sectionTranslations.checklist[item.id].description,
              })),
            };

            return <Section key={section.id} section={sectionData} />;
          })}
          <CategoryNav
            previousLabel={tCore.previous}
            nextLabel={tCore.next}
            next={
              next
                ? { text: next.title, url: `/category/${next.id}/` }
                : { text: tCore.exportAction, url: "/share/" }
            }
            previous={
              previous && {
                text: previous.title,
                url: `/category/${previous.id}/`,
              }
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/category/design-language",
      "/category/design-tokens",
      "/category/core-components",
      "/category/tooling",
      "/category/project-management",
    ],
    fallback: true,
  };
}

export async function getStaticProps({ locale }) {
  const tCore = (await import(`../../src/translations/${locale}/core`)).default;
  const tContent = (await import(`../../src/translations/${locale}/content`))
    .default;

  return {
    props: { tContent, tCore },
  };
}

export default CategoryRoute;
