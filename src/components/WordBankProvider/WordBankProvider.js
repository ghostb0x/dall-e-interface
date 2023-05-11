import React from 'react';

export const WordBankContext = React.createContext();

function WordBankProvider({ children }) {
  
  const [wordBankItems, setWordBankItems] = React.useState([]);

  function addToWordBank(toAdd) {
    const newWordBankItems = [...wordBankItems];
    newWordBankItems.push(toAdd);
    setWordBankItems(newWordBankItems);
    updateQueryText(queryText, toAdd)
  }


  const [queryText, setQueryText] = React.useState('');


  function updateQueryText(existingText, toAdd) {
    let newQueryText = existingText;
    const newWord = toAdd.word
    
    newQueryText += (newWord + " ")
    
    setQueryText(newQueryText)
  }

  const textAreaRef = React.useRef();



  const providerValues = { 
    wordBankItems,
    addToWordBank,
    queryText,
    textAreaRef
  };

  return (
    <WordBankContext.Provider value={providerValues}>
      {children}
    </WordBankContext.Provider>
  );
}

export default WordBankProvider;
