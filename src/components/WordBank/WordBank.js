import React from 'react';
import { WordBankContext } from '../WordBankProvider';

function WordBank() {
  const { wordBankItems } = React.useContext(WordBankContext);

  return (
    <div>
      <h3>Word Bank</h3>
      {wordBankItems.map( (item) => (
        <div key={crypto.randomUUID()}>
          <p>
            {item.word}
          </p>
          <img alt={`${item.word}`} src={item.imgSrc} />
        </div>

      ))}
     
    </div>
  );
}

export default WordBank;
