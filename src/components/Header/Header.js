import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import s from "./Header.module.css";

const Header = ({ tCore }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const navClassName = classnames(s.nav, active && s["active"]);
  const burgerClassName = classnames(s.burger, active && s["active"]);

  const toggleMenu = (flag) => {
    const nextActive = flag === undefined ? !active : flag;
    setActive(nextActive);
    document.body.style.overflow = nextActive ? "hidden" : "auto";
  };

  const closeMenu = () => toggleMenu(false);

  const handleLanguageChange = (e) => {
    router.push(router.basePath, router.asPath, { locale: e.target.value });
  };

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Link href="/" onClick={closeMenu}>
          Design System Checklist
        </Link>
      </span>

      <nav className={navClassName}>
        <ul>
          <li className={s.item}>
            <select
              className={s.language}
              onChange={handleLanguageChange}
              defaultValue={router.locale}
            >
              <option value="en">English</option>
              <option value="cz">Czech</option>
            </select>
          </li>
          <li className={s.item} role="decoration">
            |
          </li>
          <li className={s.item}>
            <Link href="/about" onClick={closeMenu}>
              {tCore.about}
            </Link>
          </li>
          <li className={s.item}>
            <Link href="/share" onClick={closeMenu}>
              {tCore.share}
            </Link>
          </li>
          <li className={s.item}>
            <a
              href="https://github.com/ardakaracizmeli/design-system-checklist"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tCore.contribute}
            </a>
          </li>
          <li className={s.item}>
            <Link href="/contact" onClick={closeMenu}>
              {tCore.contact}
            </Link>
          </li>
        </ul>
      </nav>

      <button className={burgerClassName} onClick={() => toggleMenu()}>
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export default Header;
