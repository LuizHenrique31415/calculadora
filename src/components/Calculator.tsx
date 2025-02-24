'use client';

import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { calculate } from '../utils/calculatorUtils';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (label: string) => {
    switch (label) {
      case '=':
        try {
          setDisplayValue(calculate(displayValue));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'C':
        setDisplayValue('');
        break;
      default:
        if (displayValue === 'Error') {
          setDisplayValue(label);
        } else {
          setDisplayValue(displayValue + label);
        }
        break;
    }
  };

  return (
    <div className={styles.calculator}>
      <Display value={displayValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;