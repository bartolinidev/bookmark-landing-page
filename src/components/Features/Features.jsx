import { useState } from 'react';
import { Container } from '../Container/Container';
import styles from './Features.module.css';

import tab1Img from '../../assets/images/illustration-features-tab-1.svg';
import tab2Img from '../../assets/images/illustration-features-tab-2.svg';
import tab3Img from '../../assets/images/illustration-features-tab-3.svg';

const TABS_DATA = [
  {
    id: 'tab-1',
    label: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    image: tab1Img,
    alt: 'Bookmark tab interface illustration',
  },
  {
    id: 'tab-2',
    label: 'Speedy Searching',
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    image: tab2Img,
    alt: 'Speedy search illustration with magnifying glass',
  },
  {
    id: 'tab-3',
    label: 'Easy Sharing',
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the tap of a button.',
    image: tab3Img,
    alt: 'Easy sharing illustration with people',
  },
];

export function Features() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = TABS_DATA[activeTabIndex];

  return (
    <section className={styles.features}>
      <Container>
        <div className={styles.features__header}>
          <h2 className={styles.features__heading}>Features</h2>
          <p className={styles.features__subheading}>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        {/* Tabs container */}
        <div className={styles.features__tabs} role="tablist">
          {TABS_DATA.map((tab, index) => {
            const isActive = index === activeTabIndex;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.features__tabBtn} ${
                  isActive ? styles.features__tabBtnActive : ''
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* activeTab content */}
        <div className={styles.features__content}>
          <div className={styles.features__imageContainer}>
            <img
              src={activeTab.image}
              alt={activeTab.alt}
              className={styles.features__image}
            />
            <div className={styles.features__bgShape} aria-hidden="true" />
          </div>

          <div className={styles.features__textContent}>
            <h3 className={styles.features__title}>{activeTab.title}</h3>
            <p className={styles.features__description}>
              {activeTab.description}
            </p>
            <a href="#more-info" className={styles.features__btn}>
              More Info
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
