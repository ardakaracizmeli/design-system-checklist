import React from "react";
import Hero from "../../src/components/Hero";
import ExportButton from "../../src/components/ExportButton";
import Layout from "../../src/components/Layout";
import s from "./share.module.css";

const ShareRoute = ({ t }) => {
  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero title={t.core.exportTitle} subtitle={t.core.exportSubtitle}>
          <ExportButton
            text={t.core.exportAction}
            feedbackText={t.core.exportComplete}
          />
        </Hero>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const t = (await import(`../../src/translations/${locale}/index`)).default;

  return {
    props: { t },
  };
}

export default ShareRoute;
