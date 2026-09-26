import { Container } from '../Container/Container';
import styles from './Extension.module.css';

import logoChrome from '../../assets/images/logo-chrome.svg';
import logoFirefox from '../../assets/images/logo-firefox.svg';
import logoOpera from '../../assets/images/logo-opera.svg';

const EXTENSIONS = [
  {
    id: 'chrome',
    name: 'Add to Chrome',
    version: 'Minimum version 62',
    icon: logoChrome,
    link: '#pricing',
  },
  {
    id: 'firefox',
    name: 'Add to Firefox',
    version: 'Minimum version 55',
    icon: logoFirefox,
    link: '#pricing',
  },
  {
    id: 'opera',
    name: 'Add to Opera',
    version: 'Minimum version 46',
    icon: logoOpera,
    link: '#pricing',
  },
];

export function Extension() {
  return (
    <section id="pricing" className={styles.extension}>
      <Container>
        <div className={styles.extension__header}>
          <h2 className={styles.extension__title}>Download the extension</h2>
          <p className={styles.extension__description}>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        <div className={styles.extension__grid}>
          {EXTENSIONS.map((card) => (
            <div key={card.id} className={styles.extension__card}>
              <div className={styles.extension__cardContent}>
                <img
                  src={card.icon}
                  alt={`${card.name} logo`}
                  className={styles.extension__icon}
                />
                <h3 className={styles.extension__cardTitle}>{card.name}</h3>
                <p className={styles.extension__cardVersion}>{card.version}</p>
              </div>

              {/* Dotted SVG bg */}
              <div className={styles.extension__dots} aria-hidden="true" />

              <div className={styles.extension__cardFooter}>
                <a href={card.link} className={styles.extension__btn}>
                  Add & Install Extension
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
