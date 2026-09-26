import { useState } from 'react';
import { Container } from '../Container/Container';
import styles from './Faq.module.css';

const FAQ_DATA = [
  {
    id: 'bookmark',
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus feugiat risus eros, ut vulputate eros facilisis ac.',
  },
  {
    id: 'request-browser',
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies.',
  },
  {
    id: 'mobile-app',
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate elementum. Suspendisse potenti.',
  },
  {
    id: 'chromium-browsers',
    question: 'What about other Chromium browsers?',
    answer:
      'Integer cursus quam ivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.faq__header}>
          <h2 className={styles.faq__title}>Frequently Asked Questions</h2>
          <p className={styles.faq__description}>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <div className={styles.faq__accordion}>
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`${styles.faq__item} ${
                  isOpen ? styles.faq__itemExpanded : ''
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  className={styles.faq__questionBtn}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => handleToggle(index)}
                >
                  <span className={styles.faq__questionText}>
                    {item.question}
                  </span>

                  <svg
                    className={styles.faq__icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={styles.faq__answerWrapper}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                >
                  <div className={styles.faq__answerInner}>
                    <p className={styles.faq__answerText}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.faq__cta}>
          <a href="#contact" className={styles.faq__btn}>
            More Info
          </a>
        </div>
      </Container>
    </section>
  );
}
