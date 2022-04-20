import React from "react";
import Button from "../../src/components/Button";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import s from "./more.module.css";

const MoreRoute = ({ tCore }) => {
  return (
    <Layout tCore={tCore}>
      <div className={s.container}>
        <Hero title={tCore.moreTitle} subtitle={tCore.moreText}>
          <Button
            text={tCore.moreAction}
            href="https://reshaped.so"
            attributes={{ target: "_blank" }}
          />
        </Hero>
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

export default MoreRoute;
