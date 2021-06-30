import React from "react";
import Hero from "../../src/components/Hero";
import ExportButton from "../../src/components/ExportButton";
import Layout from "../../src/components/Layout";
import s from "./share.module.css";

const ShareRoute = ({ tCore }) => {
  return (
    <Layout tCore={tCore}>
      <div className={s.container}>
        <Hero title={tCore.exportTitle} subtitle={tCore.exportSubtitle}>
          <ExportButton
            text={tCore.exportAction}
            feedbackText={tCore.exportComplete}
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

export default ShareRoute;
