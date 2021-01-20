import React from "react";
import s from "./Hero.module.css";

const Hero = ({ mainTitle, mainSubtitle, children }) => {
  let { root, title, subtitle, content } = { s };
  return (
    <div className={root}>
      <h1 className={title}>{mainTitle}</h1>
      <div className={subtitle}>{mainSubtitle}</div>
      {children && <div className={content}>{children}</div>}
    </div>
  );
};

export default Hero;
