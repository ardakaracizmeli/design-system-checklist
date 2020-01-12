import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = (flag) => {
    const nextActive = flag === undefined ? !active : flag;

    setActive(nextActive);
    document.body.style.overflow = flag ? 'hidden' : 'auto';
  };

  const closeMenu = () => toggleMenu(false);

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Link to="/" onClick={closeMenu}>Design System Checklist</Link>
      </span>

      <nav className={[s.nav, active && s.active].join(' ')}>
        <ul>
          <li className={s.item}>
            <Link to="/about/" onClick={closeMenu}>About</Link>
          </li>
          <li className={s.item}>
            <Link to="/workshop/" onClick={closeMenu}>Workshops</Link>
          </li>
          <li className={s.item}>
            <a href="https://github.com/ardakaracizmeli/design-system-checklist" target="_blank" rel="noopener noreferrer">Contribute</a>
          </li>
        </ul>
      </nav>

      <button className={[s.burger, active && s.active].join(' ')} onClick={() => toggleMenu()}>
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export default Header;
