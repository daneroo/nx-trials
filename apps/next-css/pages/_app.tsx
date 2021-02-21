import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NextLogo } from '../public/nextjs-white-logo.svg';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-css!</title>
        <meta name='author' content='Daniel Lauzon' />
        <meta
          name='description'
          content='Next.js with Nx'
        />
      </Head>
      <div className="app">
        <header className="flex">
          <NextLogo width={207 / 2} height={124 / 2} />
          <h1>Welcome to next-css!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
