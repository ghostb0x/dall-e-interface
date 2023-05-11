import React from 'react';
import styles from './QueryInput.module.css';
import { WordBankContext } from '../WordBankProvider';

function QueryInput() {
  
  const { queryText, textAreaRef } = React.useContext(WordBankContext);

  return (
    <div>
      <textarea
        ref={textAreaRef}
        className={styles.inputWrapper}
        value={queryText}
      >
        {queryText}
      </textarea>
    </div>
  );
}

export default QueryInput;
