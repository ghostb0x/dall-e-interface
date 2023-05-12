import React from 'react';
import styles from './QueryInput.module.css';
import { WordBankContext } from '../WordBankProvider';

function QueryInput() {
  const {
    queryText,
    setQueryText,
    textAreaRef,
    textCursor,
    setTextCursor,
  } = React.useContext(WordBankContext);

  const updateLoc = React.useCallback(() => {
    let cursorLoc = textAreaRef.current.selectionEnd;
    setTextCursor(cursorLoc);
  }, [setTextCursor, textAreaRef]);

  // on mount and after each queryText update
  // refocuses cursor at newest textCursor location
  React.useEffect(() => {
    textAreaRef.current.focus();
    textAreaRef.current.selectionEnd = textCursor;
  }, [textAreaRef, queryText, textCursor]);

  // event listener for keyboard navigation
  // within textarea to update cursor loc
  React.useEffect(() => {
    function handleKeyDown(event) {
      const navigationKeys = [
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'End',
        'Home',
        'PageDown',
        'PageUp',
      ];
      if (navigationKeys.includes(event.code)) {
        // setTimeout is necessary because of an odd
        // lag when using navkeys and updating caret loc
        // referenced at textAreaRef.current.selectionEnd
        // I think it's React state lag
        setTimeout(() => updateLoc(), 100);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [updateLoc]);

  return (
    <div>
      <textarea
        ref={textAreaRef}
        className={styles.inputWrapper}
        value={queryText}
        onClick={updateLoc}
        onChange={(event) => {
          setQueryText(event.target.value);
          updateLoc();
        }}
      >
        {queryText}
      </textarea>
    </div>
  );
}

export default QueryInput;
