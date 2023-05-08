import React from 'react';
import { WordBankContext } from '../WordBankProvider';

function ListItem({suggestion}) {
  const { addToWordBank } = React.useContext(WordBankContext);

  return (
    <div
      key={suggestion.id}
      onClick={() => {
        addToWordBank(suggestion);
        // addToTextInput(suggestion.word)
        // closeGeneratorInterface()
      }}
    >
      <p>{suggestion.word}</p>
      <img
        src={suggestion.imgSrc}
        alt={`${suggestion.word}`}
      />
    </div>
  );
}

export default ListItem;
