import React from 'react';

import styles from './detail-card.module.css';

/* eslint-disable-next-line */
export interface DetailCardProps {
  open?: boolean,
  title: string,
  text: string
}

export function DetailCard({ open = false, title, text }: DetailCardProps) {
  return (
    <details className={styles.detail} open={open}>
      <summary>{title}</summary>
      <pre>{text}</pre>
    </details>
  );
}

export default DetailCard;
