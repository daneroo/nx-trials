import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/header/header'
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Welcome to next-css!</title>
        <meta name='author' content='Daniel Lauzon' />
        <meta
          name='description'
          content='Next.js with Nx'
        />
      </Head>
      <div className="app">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
