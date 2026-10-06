import { useState, useEffect } from 'react';
import { Container } from '../Container/Container';
import styles from './Newsletter.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [count, setCount] = useState(35000);

  // Countdown 35000 to 0 in 20 sec
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / 20000, 1);

      setCount(Math.floor(35000 * (1 - progress)));

      if (progress >= 1) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !EMAIL_REGEX.test(email)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError('');
      alert('Success!');
      setEmail('');
    }
  };

  return (
    <section id="contact" className={styles.newsletter}>
      <Container>
        <div className={styles.newsletter__content}>
          <p className={styles.newsletter__counter}>
            {count.toLocaleString('en-US')}+ ALREADY JOINED
          </p>

          <h2 className={styles.newsletter__title}>
            Stay up-to-date with what we’re doing
          </h2>

          <form
            className={styles.newsletter__form}
            onSubmit={handleSubmit}
            noValidate
          >
            <div
              className={`${styles.newsletter__inputWrapper} ${error ? styles.newsletter__inputWrapperError : ''}`}
            >
              <input
                type="email"
                className={styles.newsletter__input}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(''); // Clear error while typing
                }}
              />

              {/* Conditional error icon display */}
              {error && (
                <svg
                  className={styles.newsletter__errorIcon}
                  width="20"
                  height="20"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="hsl(0, 94%, 67%)" />
                    <rect
                      width="2"
                      height="7"
                      x="9"
                      y="5"
                      fill="hsl(0, 0%, 100%)"
                      rx="1"
                    />
                    <rect
                      width="2"
                      height="2"
                      x="9"
                      y="13"
                      fill="hsl(0, 0%, 100%)"
                      rx="1"
                    />
                  </g>
                </svg>
              )}

              {/* Error message - conditionally */}
              {error && (
                <span className={styles.newsletter__errorText}>{error}</span>
              )}
            </div>

            <button type="submit" className={styles.newsletter__btn}>
              Contact Us
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
