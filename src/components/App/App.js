import React from 'react';
import WordBankProvider from '../WordBankProvider';
import AppContents from '../AppContents';

function App() {
  return (
    <WordBankProvider>
      <AppContents />
    </WordBankProvider>
  );
}

export default App;
