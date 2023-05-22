import React from 'react';
import WordBank from '../WordBank';
import QueryInput from '../QueryInput';
import WordGenerator from '../WordGenerator';
import OverlayDialog from '../OverlayDialog';
import styles from './AppContents.module.css';
import { WordBankData } from '../../data/WordBankData';

function AppContents() {
  // WordBankData.map( category => {
  //   let catName = category.category
  //   let catItems = category.items

  //   let newObj = {
  //     catName: catItems
  //   }
  // })

  // Above was an attempt to generalize fetching WordBankData
  const animalsList = WordBankData[0]['items'];
  const countriesList = WordBankData[1]['items'];
  const verbsList = WordBankData[2]['items'];

  return (
    <div className={styles.appContainer}>
      <div className={styles.topRow}>
        <div className={styles.QueryInputContainer}>
          <QueryInput />
        </div>

        <div className={styles.LaunchWordGenerators}>
          <div
            id="animalsWrapper"
            className={styles.LaunchOverlayButtonWrapper}
          >
            <h3>Animal Words</h3>
            <OverlayDialog>
              <WordGenerator wordList={animalsList} />
            </OverlayDialog>
          </div>

          <div
            id="countryWrapper"
            className={styles.LaunchOverlayButtonWrapper}
          >
            <h3>Country Name Words</h3>
            <OverlayDialog>
              <WordGenerator wordList={countriesList} />
            </OverlayDialog>
          </div>

          <div
            id="verbsWrapper"
            className={styles.LaunchOverlayButtonWrapper}
          >
            <h3>Action Verb Words</h3>
            <OverlayDialog>
              <WordGenerator wordList={verbsList} />
            </OverlayDialog>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <WordBank />
      </div>
    </div>
  );
}

export default AppContents;
