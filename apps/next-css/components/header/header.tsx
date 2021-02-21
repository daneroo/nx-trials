import React from 'react';

import { ReactComponent as NextLogo } from '../../public/nextjs-white-logo.svg';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps { }

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header} >
      <NextLogo width={207 / 2} height={124 / 2} />
      <h1>Welcome to next-css!</h1>
    </header>
  );
}

export default Header;
