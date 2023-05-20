import React from "react";
import Link from "next/link";
import Button from "../Button";
import s from "./Footer.module.css";

const Footer = ({ t }) => {
  return (
    <footer className={s.root}>
      <div className={s.content}>
        <h4 className={s.title}>{t.core.footerTitle}</h4>
        <p className={s.text}>{t.core.footerText}</p>
        <Link href="https://reshaped.so" passHref>
          <Button
            text={t.core.footerAction}
            attributes={{ target: "_blank" }}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
