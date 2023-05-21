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
  const animalsList = WordBankData[0]['items']
  const countriesList = WordBankData[1]['items']
  const verbsList = WordBankData[2]['items']



  return (
    <>
      <div className={styles.appContainer}>
        <QueryInput />
        <OverlayDialog>
          <WordGenerator wordList={animalsList}/>
        </OverlayDialog>
        <OverlayDialog>
          <WordGenerator wordList={countriesList}/>
        </OverlayDialog>
        <OverlayDialog>
          <WordGenerator wordList={verbsList}/>
        </OverlayDialog>
        
      </div>
      <WordBank />
    </>
  );
}

export default AppContents;
