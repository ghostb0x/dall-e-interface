import React from 'react';

export const WordBankContext = React.createContext();

function WordBankProvider({ children }) {
  const [wordBankItems, setWordBankItems] = React.useState([]);

  function addToWordBank(toAdd) {
    const newWordBankItems = [...wordBankItems];
    newWordBankItems.push(toAdd);
    setWordBankItems(newWordBankItems);
  }

  const providerValues = { wordBankItems, addToWordBank };

  return (
    <WordBankContext.Provider value={providerValues}>
      {children}
    </WordBankContext.Provider>
  );
}

export default WordBankProvider;
