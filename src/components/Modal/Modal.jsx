import { useState, useEffect, useRef } from 'react';
import styles from './Modal.module.css';

import tab2Image from '../../assets/images/illustration-features-tab-2.svg';
import iconClose from '../../assets/images/icon-close.svg';

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  // Ensures only 1 modal pop out per type
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [hasExitOpened, setHasExitOpened] = useState(false);
  const dialogRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  // Type 1: Auto-open after 30 secs
  useEffect(() => {
    if (hasAutoOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  // Type 2: Exit-Intent
  useEffect(() => {
    if (hasExitOpened) return;

    const handleMouseLeave = (event) => {
      if (event.clientY <= 0) {
        setIsOpen(true);
        setHasExitOpened(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasExitOpened]);

  // Synchro React state with native tag <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Service of native close (i.e. Esc btn)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const markClosed = () => setIsOpen(false);
    dialog.addEventListener('close', markClosed);
    return () => dialog.removeEventListener('close', markClosed);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className={styles.content}
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className={styles.closeBtn}
        onClick={closeModal}
        aria-label="Close modal"
      >
        <img src={iconClose} alt="" aria-hidden="true" />
      </button>

      <div className={styles.imageWrapper}>
        <img src={tab2Image} alt="Intelligent Search illustration" />
      </div>

      <div className={styles.textContent}>
        <h2 id="modal-title" className={styles.title}>
          Intelligent Search
        </h2>
        <p className={styles.description}>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={closeModal}
          >
            Take Action
          </button>
          <button
            type="button"
            className={styles.btnSecondary}
            onClick={closeModal}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </dialog>
  );
}
