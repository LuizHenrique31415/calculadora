'use client';

import styles from './Calculator.module.css';

const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
