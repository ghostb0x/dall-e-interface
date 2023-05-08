import React from 'react';
import { WordBankContext } from '../WordBankProvider';
import styles from './WordBank.module.css';

function WordBank() {
  const { wordBankItems } = React.useContext(WordBankContext);

  return (
    <div>
      <h3>Word Bank</h3>
      <div className={styles.wordShelf}>
        {wordBankItems.map((item) => (
          <div
            key={crypto.randomUUID()}
            className={styles.item}
          >
            <p className={styles.word}>{item.word}</p>
            <img
              className={styles.img}
              alt={`${item.word}`}
              src={item.imgSrc}
              height="165px"
              width="165px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordBank;
