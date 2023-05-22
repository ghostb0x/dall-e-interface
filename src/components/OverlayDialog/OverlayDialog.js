import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import styles from './OverlayDialog.module.css';

function OverlayDialog({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.OpenButton}>
          Open Word Generator
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay}>
          <Dialog.Content className={styles.DialogContent}>
            <Dialog.Title className={styles.DialogTitle}>
              Word Generator
            </Dialog.Title>
            <Dialog.Description className={styles.DialogDescription}>
              Select a word from the list of options to add it to your
              text.
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                className={styles.IconButton}
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
            <div className={styles.ItemColumn}>{children}</div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default OverlayDialog;
