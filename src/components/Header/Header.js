import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import s from './Header.module.css';

const Header = () => {
  const [active, setActive] = useState(false);
  const navClassName = classnames(s.nav, active && s['active']);
  const burgerClassName = classnames(s.burger, active && s['active']);

  const toggleMenu = (flag) => {
    const nextActive = flag === undefined ? !active : flag;
    setActive(nextActive);
    document.body.style.overflow = nextActive ? 'hidden' : 'auto';
  };

  const closeMenu = () => toggleMenu(false);

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Link to="/" onClick={closeMenu}>Design System Checklist</Link>
      </span>

      <nav className={navClassName}>
        <ul>
          <li className={s.item}>
            <Link to="/about/" onClick={closeMenu}>About</Link>
          </li>
          <li className={s.item}>
            <Link to="/workshop/" onClick={closeMenu}>Workshops</Link>
          </li>
          <li className={s.item}>
          <Link to="/share/" onClick={closeMenu}>Share</Link>
          </li>
          <li className={s.item}>
            <a href="https://github.com/ardakaracizmeli/design-system-checklist" target="_blank" rel="noopener noreferrer">Contribute</a>
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
