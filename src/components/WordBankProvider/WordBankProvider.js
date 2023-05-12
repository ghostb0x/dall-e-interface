import React from 'react';

export const WordBankContext = React.createContext();

function WordBankProvider({ children }) {
  // QueryInput Component state and ref
  const textAreaRef = React.useRef();

  const [textCursor, setTextCursor] = React.useState(0);

  const [queryText, setQueryText] = React.useState('');

  function updateQueryText(toAdd) {
    const newWord = toAdd.word;

    let newQueryText =
      queryText.slice(0, textCursor) +
      (newWord + ' ') +
      queryText.slice(textCursor);

    setQueryText(newQueryText);

    setTextCursor(textCursor + newWord.length + 1);
  }

  // WordBank State and function
  const [wordBankItems, setWordBankItems] = React.useState([]);

  function addToWordBank(toAdd) {
    const newWordBankItems = [...wordBankItems];
    newWordBankItems.push(toAdd);
    setWordBankItems(newWordBankItems);
    updateQueryText(toAdd);
  }

  // Provider Values to pass in Context
  const providerValues = {
    wordBankItems,
    addToWordBank,
    queryText,
    setQueryText,
    textAreaRef,
    textCursor,
    setTextCursor,
  };

  return (
    <WordBankContext.Provider value={providerValues}>
      {children}
    </WordBankContext.Provider>
  );
}

export default WordBankProvider;
