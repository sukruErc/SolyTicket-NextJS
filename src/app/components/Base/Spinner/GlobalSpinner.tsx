'use client';
import React from 'react';
import styles from './GlobalSpinner.module.css';
import { useSpinner } from '@/app/context/SpinnerContext';

const GlobalSpinner: React.FC = () => {
  const { loading } = useSpinner();

  if (!loading) return null;

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default GlobalSpinner;
