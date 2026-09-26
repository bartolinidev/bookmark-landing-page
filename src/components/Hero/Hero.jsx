import { Container } from '../Container/Container';
import styles from './Hero.module.css';
import heroIllustration from '../../assets/images/illustration-hero.svg';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__imageContainer}>
            <img
              src={heroIllustration}
              alt="Bookmark app interface"
              className={styles.hero__image}
            />
            {/* Rounded CSS bg */}
            <div className={styles.hero__bgShape} aria-hidden="true" />
          </div>

          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>A Simple Bookmark Manager</h1>
            <p className={styles.hero__description}>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className={styles.hero__actions}>
              <a href="#download" className={styles.hero__btnPrimary}>
                Get it on Chrome
              </a>
              <a href="#download" className={styles.hero__btnSecondary}>
                Get it on Firefox
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
