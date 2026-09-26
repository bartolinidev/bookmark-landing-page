import { useState, useEffect } from 'react';
import { Container } from '../Container/Container';
import { Logo } from './Logo';
import { IconFacebook, IconTwitter } from '../icons';
import styles from './Header.module.css';

import iconHamburger from '../../assets/images/icon-hamburger.svg';
import iconClose from '../../assets/images/icon-close.svg';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__wrapper}>
          <a
            href="#"
            className={styles.header__logo}
            onClick={closeMenu}
            aria-label="Bookmark Homepage"
          >
            <Logo isOpen={isMenuOpen} />
          </a>

          <nav
            id="main-nav"
            className={`${styles.header__nav} ${
              isMenuOpen ? styles.header__navOpen : ''
            }`}
            aria-label="Main navigation"
          >
            <ul className={styles.header__navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.name} className={styles.header__navItem}>
                  <a
                    href={link.href}
                    className={styles.header__navLink}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className={styles.header__navItem}>
                <a
                  href="#login"
                  className={styles.header__ctaButton}
                  onClick={closeMenu}
                >
                  Login
                </a>
              </li>
            </ul>

            {/* Social Media Icons (Mobile Only) */}
            <ul className={styles.header__socialList}>
              <li className={styles.header__socialItem}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>
              </li>
              <li className={styles.header__socialItem}>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <IconTwitter />
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={styles.header__toggleBtn}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
          >
            <img
              src={isMenuOpen ? iconClose : iconHamburger}
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
