import React from 'react';
import { WordBankContext } from '../WordBankProvider';

function ListItem(suggestion) {
  const [addToWordBank] = React.useContext(WordBankContext);

  return (
    <div
      key={suggestion.id}
      onClick={() => {
        addToWordBank(suggestion)
        // closeGeneratorInterface()
      }
        }
    >
      <p>{suggestion.suggestionWord}</p>
      <img src={suggestion.imgSrc} alt={`${suggestion.suggestionWord}`} />
    </div>
  );
}

export default ListItem;
