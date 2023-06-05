import React from "react";
import SectionTitle from "../SectionTitle";
import Checklist from "../Checklist";
import Resources from "../Resources";
import { useCheckedIds } from "../../utilities/checklistsContext";
import s from "./Section.module.css";

const Section = ({ section, completedLabel }) => {
  const { title, id, description, checklist, resources } = section;
  const { checkedIds } = useCheckedIds();
  const total = section.checklist.length;
  const completed = section.checklist.filter((item) =>
    checkedIds.includes(item.id)
  ).length;

  return (
    <div id={id} className={s.container}>
      <SectionTitle
        title={title}
        total={total}
        completed={completed}
        className={s.title}
        completedLabel={completedLabel}
      />

      <p className={s.description}>{description}</p>
      <Checklist checklist={checklist} />
      <Resources resources={resources} />
    </div>
  );
};

export default Section;
