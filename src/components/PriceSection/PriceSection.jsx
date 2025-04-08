import React from 'react';
import PriceCard from './PriceCard';
import styles from './PriceSection.module.css';

function PriceSection() {
  return (
    <section className={styles.priceSection}>
      <h2>Pricing</h2>
      <PriceCard />
    </section>
  );
}

export default PriceSection;
