import React from 'react';
import { WordBankData } from '../../data/WordBankData';
import ListItem from '../ListItem/ListItem';
import styles from './WordGenerator.module.css';


function WordGenerator() {
  return (
    <div className={styles.wordShelf}>
      {WordBankData[0]['items'].map((item) => (
        <ListItem key={crypto.randomUUID()} suggestion={item} />
      ))}
      
    </div>
  );
}

export default WordGenerator;
