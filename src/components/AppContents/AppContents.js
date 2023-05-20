import React from 'react';
import WordBank from '../WordBank';
import QueryInput from '../QueryInput';
import WordGenerator from '../WordGenerator';
import OverlayDialog from '../OverlayDialog';
import styles from './AppContents.module.css'

function AppContents() {
  return (
    <>
      <div className={styles.appContainer}>
        <QueryInput />
        <OverlayDialog>
          <WordGenerator />
        </OverlayDialog>
        
      </div>
      <WordBank />
    </>
  );
}

export default AppContents;
