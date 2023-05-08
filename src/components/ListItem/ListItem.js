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
        // addToTextInput(suggestion.word)
        // closeGeneratorInterface()
      }}
    >
      <p className={styles.word}>{suggestion.word}</p>
      <img
        className={styles.img}
        src={suggestion.imgSrc}
        alt={`${suggestion.word}`}
        height="165px"
        width="165px"
      />
    </div>
  );
}

export default ListItem;
