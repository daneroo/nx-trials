import React from 'react';
import Link from 'next/link'

import { ReactComponent as NextLogo } from '../../public/nextjs-white-logo.svg';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps { }

// from https://css-tricks.com/how-to-create-a-shrinking-header-on-scroll-without-javascript/)
export function Header(props: HeaderProps) {
  return (
    <header className={styles.outer} >
      <div className={styles.inner}>
        <div className={styles.logo}>
          <NextLogo width={207 / 2} height={124 / 2} />
        </div>
        <nav className={styles.navigation}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/image-demo"><a>Image</a></Link>
        </nav>
      </div>
    </header >
  );
}

export default Header;
