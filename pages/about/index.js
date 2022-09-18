import React from "react";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import s from "./about.module.css";

const AboutText = () => {
  return (
    <p className={s.text}>
      Hello, we're{" "}
      <a
        className={s.link}
        href="https://twitter.com/ardakaracizmeli"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arda Karacizmeli
      </a>
      , {" "}
      <a
        className={s.link}
        href="https://twitter.com/blvdmitry"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dmitry Belyaev
      </a>, {" "}
      <a
        className={s.link}
        href="https://twitter.com/hi_drozdenko"
        target="_blank"
        rel="noopener noreferrer"
      >
        Oleksii Drozdenko
      </a>,
      and {" "}
      <a
        className={s.link}
        href="https://www.linkedin.com/in/stevenbaguley/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Steven Baguley
      </a>
      .
      <br />
      <br />
      We’ve been working on design systems for a long time. And we’ve spotted
      the similarities they all share. This website is a collection of best
      practices to help you build extensive and robust design systems wherever
      you work.
      <br />
      <br />
      Our categories might not look exactly like the system you’ve planned (or
      already have). But this isn’t meant to be a definitive list of items for
      every design system. It's a set of guidelines for you to keep track of
      everything you’ll want to check off to provide a solid user experience.
      <br />
      <br />
      Everything you see here is open source. If you’d like to see additional
      content on this website or if you have feedback, please{" "}
      <a
        className={s.link}
        href="https://github.com/ardakaracizmeli/design-system-checklist"
        target="_blank"
        rel="noopener noreferrer"
      >
        contribute
      </a>
      .
    </p>
  );
};

const AboutRoute = ({ tCore }) => {
  return (
    <Layout tCore={tCore}>
      <div className={s.container}>
        <Hero title="About" subtitle={<AboutText />} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const tCore = (await import(`../../src/translations/${locale}/core`)).default;

  return {
    props: { tCore },
  };
}

export default AboutRoute;
