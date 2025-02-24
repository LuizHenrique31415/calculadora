'use client';

import styles from './Calculator.module.css';

const Display = ({ value }: { value: string }) => {
  return <div className={styles.display}>{value || '0'}</div>;
};

export default Display;
