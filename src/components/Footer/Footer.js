import React from "react";
import Link from "next/link";
import Button from "../Button";
import s from "./Footer.module.css";

const Footer = ({ tCore }) => {
  return (
    <footer className={s.root}>
      <div className={s.content}>
        <h4 className={s.title}>{tCore.footerTitle}</h4>
        <p className={s.text}>{tCore.footerText}</p>
        <Link href="/contact">
          <Button text={tCore.footerAction} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
