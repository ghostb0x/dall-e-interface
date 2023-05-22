import React from 'react';
import { WordBankContext } from '../WordBankProvider';
import styles from './ListItem.module.css'

function ListItem({suggestion}) {
  const { addToWordBank } = React.useContext(WordBankContext);


  return (
    <div
      className={styles.item}
      key={suggestion.id}
      onClick={() => {
        addToWordBank(suggestion);
        // closeGeneratorInterface()
      }}
    >
      <p className={styles.word}>{suggestion.word}</p>
      <img
        className={styles.img}
        src={suggestion.imgSrc}
        alt={`${suggestion.word}`}
      />
    </div>
  );
}

export default ListItem;
