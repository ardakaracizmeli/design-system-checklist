import React from "react";
import Button from "../../src/components/Button";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import s from "./contact.module.css";

const ContactRoute = ({ tCore }) => {
  return (
    <Layout tCore={tCore}>
      <div className={s.container}>
        <Hero title={tCore.contactTitle} subtitle={tCore.contactText}>
          <Button
            text={tCore.contactAction}
            href="mailto:admin@lightweightlabs.design"
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

export default ContactRoute;
