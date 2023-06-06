import React from "react";
import { useRouter } from "next/router";
import CategoryNav from "../../src/components/CategoryNav";
import Hero from "../../src/components/Hero";
import Section from "../../src/components/Section";
import Layout from "../../src/components/Layout";
import data from "../../src/data";
import s from "./category.module.css";

const CategoryRoute = (props) => {
  const { t } = props;
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

    if (isFound && prevItem) previous = { ...t[prevItem.id], id: prevItem.id };
    if (isFound && nextItem) next = { ...t[nextItem.id], id: nextItem.id };

    return isFound;
  });
  if (!item) return null;

  const { id: categoryId, sections } = item;
  const categoryTranslations = t[categoryId];

  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero
          title={categoryTranslations.title}
          subtitle={categoryTranslations.description}
        />
        <div className={s.sections}>
          {sections.map((section) => {
            const sectionTranslations =
              categoryTranslations.sections[section.id];

            if (!sectionTranslations) {
              throw new Error(`Can't find section: ${section.id}`);
            }

            const sectionData = {
              title: sectionTranslations.title,
              description: sectionTranslations.description,
              resources: section.resources,
              checklist: section.checklist.map((id) => {
                if (!sectionTranslations.checklist[id]) {
                  throw new Error(`Can't find item: ${id}`);
                }

                return {
                  id,
                  title: sectionTranslations.checklist[id].title,
                  description: sectionTranslations.checklist[id].description,
                };
              }),
            };

            return (
              <Section
                key={section.id}
                section={sectionData}
                completedLabel={t.core.completed}
              />
            );
          })}
          <CategoryNav
            previousLabel={t.core.previous}
            nextLabel={t.core.next}
            next={
              next
                ? { text: next.title, url: `/category/${next.id}/` }
                : { text: t.core.exportAction, url: "/share/" }
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
      "/category/foundations",
      "/category/components",
      "/category/maintenance",
    ],
    fallback: true,
  };
}

export async function getStaticProps({ locale }) {
  const t = (await import(`../../src/translations/${locale}/index`)).default;

  return {
    props: { t },
  };
}

export default CategoryRoute;
