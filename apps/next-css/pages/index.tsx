import React from 'react';
import { DetailCard } from '../components/detail-card/detail-card'
import { Ui } from '@nx-trials/ui'
import styles from './index.module.css';


export function Index() {
  return (
    <div className={styles.page}>
      <h2>Next Steps</h2>
      <p>Here are examples of some things you can do with Nx.</p>
      <p>Even deploy it on Vercel! <em>and soon enough, maybe on Netlify!!</em></p>
      <div className={styles.box}>
        <p>Here is an external component from a library, with a parameter and style</p>
        <Ui name="Nx" />
      </div>
      <Details />
    </div>
  );
}

function Details() {
  const details: {
    open?: boolean
    title: string,
    text: string
  }[] = [
      {
        open: true,
        title: 'Add UI library',
        text: `# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`
      }, {
        title: 'View dependency graph',
        text: 'nx dep-graph'
      }, {
        title: 'Run affected commands',
        text: `# see what's been affected by changes
# This is what runs in the CI (GitHub Actions)
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e`
      },

    ];

  return (
    <>
      {details.map((d) => <DetailCard key={d.title} {...d} />)}
    </>
  )
}
export default Index;
