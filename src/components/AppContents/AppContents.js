import React from 'react';
import WordBank from '../WordBank';
import QueryInput from '../QueryInput';
import WordGenerator from '../WordGenerator';
import styles from './AppContents.module.css'

function AppContents() {
  return (
    <>
      <div className={styles.appContainer}>
        <QueryInput />
        <WordGenerator />
      </div>
      <WordBank />
    </>
  );
}

export default AppContents;
