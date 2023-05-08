import React from 'react';
import WordGenerator from '../WordGenerator';
import WordBankProvider from '../WordBankProvider';
import WordBank from '../WordBank/WordBank';


function App() {

  return (
    <WordBankProvider>
      <WordGenerator />
      <WordBank />
    </WordBankProvider>
  );
}

export default App;
