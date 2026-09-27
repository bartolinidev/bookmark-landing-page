import { useState, useEffect } from 'react';
import styles from './Modal.module.css';

import tab2Image from '../../assets/images/illustration-features-tab-2.svg';
import iconClose from '../../assets/images/icon-close.svg';

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  // Ensures only 1 modal pop out per type
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [hasExitOpened, setHasExitOpened] = useState(false);

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
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
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
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
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
      </div>
    </div>
  );
}
