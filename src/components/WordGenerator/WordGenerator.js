import React from 'react';
import { WordBankData } from '../../data/WordBankData';
import ListItem from '../ListItem/ListItem';

function WordGenerator() {
  return (
    <div>
      {WordBankData[0]['items'].map((item) => (
        <ListItem key={crypto.randomUUID()} suggestion={item} />
      ))}
    </div>
  );
}

export default WordGenerator;
