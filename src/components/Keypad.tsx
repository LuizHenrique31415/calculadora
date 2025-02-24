'use client';

import styles from './Calculator.module.css';

const Keypad = ({ onButtonClick }: { onButtonClick: (label: string) => void }) => {
  const buttons = ['C', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];
  
  return (
    <div className={styles.keypad}>
      {buttons.map(button => (
        <button 
          key={button} 
          className={styles.button}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
