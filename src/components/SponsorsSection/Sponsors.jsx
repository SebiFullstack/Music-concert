import React from 'react';
import styles from './Sponsors.module.css';

function SponsorsSection() {
  return (
    <section className={styles.sponsorsSection}>
      <h2 className={styles.title}>Our Sponsors</h2>
      <div className={styles.sponsorsGrid}>
        <img src="/img/sponsors1.svg" alt="Google" className={styles.sponsorLogo} />
        <img src="/img/sponsors2.svg" alt="Microsoft" className={styles.sponsorLogo} />
        <img src="/img/sponsors3.svg" alt="Airbnb" className={styles.sponsorLogo} />
        <img src="/img/sponsors4.svg" alt="Axure" className={styles.sponsorLogo} />
        <img src="/img/sponsors5.svg" alt="Apple" className={styles.sponsorLogo} />
        <img src="/img/sponsors6.svg" alt="Facebook" className={styles.sponsorLogo} />
        <img src="/img/sponsors7.svg" alt="Nokia" className={styles.sponsorLogo} />
        <img src="/img/sponsors8.svg" alt="Oracle" className={styles.sponsorLogo} />
      </div>
      <button className={styles.sponsorButton}>Become a Sponsor</button>
    </section>
  );
}

export default SponsorsSection;