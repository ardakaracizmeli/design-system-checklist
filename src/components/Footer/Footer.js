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
        <Link href="https://reshaped.so" passHref>
          <Button text={tCore.footerAction} attributes={{ target: "_blank" }} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
