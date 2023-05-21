import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './WordGenerator.module.css';


function WordGenerator({wordList}) {
  return (
    <div className={styles.wordShelf}>
      {wordList.map((item) => (
        <ListItem key={crypto.randomUUID()} suggestion={item} />
      ))}
      
    </div>
  );
}

export default WordGenerator;
