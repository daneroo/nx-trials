import styles from './ui.module.css';
import React from 'react';


/* eslint-disable-next-line */
export interface UiProps {
  name: string;
}

export function Ui(props: UiProps) {
  const { name } = props
  return (
    <div className={styles.junk}>
      <h1>Welcome to Ui, {name}!</h1>
    </div>
  );
}

export default Ui;
