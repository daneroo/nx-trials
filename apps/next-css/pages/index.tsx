import React from 'react';

import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h2>Next Steps</h2>
      <p>Here are some things you can do with Nx.</p>
      <details open>
        <summary>Add UI library</summary>
        <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
      </details>
      <details open={true}>
        <summary>View dependency graph</summary>
        <pre>{`nx dep-graph`}</pre>
      </details>
      <details open={true}>
        <summary>Run affected commands</summary>
        <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
`}</pre>
      </details>
    </div>
  );
}

export default Index;
