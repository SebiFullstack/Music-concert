import React from 'react';
import PriceCard from './PriceCard';
import styles from './PriceSection.module.css';

export default function PriceSection() {
  return (
    <section id="price-section" className={styles.wrapper}>
      <h2 className={styles.title}>Choose a Tier that’s right for you</h2>
      <div className={styles.grid}>
        <PriceCard
          tier="Basic"
          price={100}
          seats="1 Seat Available"
          features={["Access to Wifi Router", "Free Food & Coffee"]}
          type="basic"
          className="basic"
        />
        <PriceCard
          tier="Standard"
          price={150}
          seats="1 Seat Available"
          features={["Access to Wifi Router", "Free Food & Coffee"]}
          type="standard"
          className="standard"
        />
        <PriceCard
          tier="Premium"
          price={200}
          seats="2 Seats Available"
          features={["Access to Wifi Router", "Free Food & Coffee"]}
          type="premium"
          className="premium"
        />
      </div>
    </section>
  );
}
