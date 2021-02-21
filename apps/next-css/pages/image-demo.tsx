import React from 'react';

import Image from 'next/image'

import './image-demo.module.css';

/* eslint-disable-next-line */
export interface ImageDemoProps { }

export function ImageDemo(props: ImageDemoProps) {
  return (
    <div>
      <h1>Next.js Image demo</h1>
      <Image alt="NASA's Perseverance rover operating on the surface of Mars" src="/nasa-perseverance-2021.jpg" width={1440} height={810} layout="responsive" />
      <p><em>Unfortunately this does not work with exported sited unless an external loader is provided. It does work out of the box with vercel, and next start</em></p>
      <p>The image is transcoded into efficient web formats
      and a `srcset` is provided for a better responsive experience.
        Here is <a href="https://egghead.io/learn/ecommerce/product-images-that-dont-byte-with-the-nextjs-image-component">quick explanation on egghead.io</a>
      </p>
      <p><a href="https://www.jpl.nasa.gov/images/perseverance-on-mars">This illustration</a> depicts NASA's Perseverance rover operating on the surface of Mars.
        Perseverance will land at the Red Planet's Jezero Crater a little after 3:40 p.m. EST (12:40 p.m. PST) on Feb. 18, 2021.</p>
    </div >
  );
}

export default ImageDemo;
