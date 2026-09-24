import { useState, useEffect } from 'react';
import { Container } from '../Container/Container';
import { Logo } from './Logo';
import styles from './Header.module.css';

import iconHamburger from '../../assets/images/icon-hamburger.svg';
import iconClose from '../../assets/images/icon-close.svg';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu after reaching desktop brakpoint (768px)
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
        <div className={styles.navWrapper}>
          <a
            href="#"
            className={styles.logo}
            onClick={closeMenu}
            aria-label="Bookmark Homepage"
          >
            <Logo isOpen={isMenuOpen} />
          </a>

          <nav
            id="main-nav"
            className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
            aria-label="Main navigation"
          >
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={styles.navLink}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#login"
                  className={styles.ctaButton}
                  onClick={closeMenu}
                >
                  Login
                </a>
              </li>
            </ul>

            {/* Social Media Icons (Mobile Only) */}
            <ul className={styles.socialList}>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img src={iconFacebook} alt="" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img src={iconTwitter} alt="" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={styles.toggleBtn}
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