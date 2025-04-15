import styles from './PriceCard.module.css';

export default function PriceCard({ tier, price, seats, features, type }) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <h3 className={styles.tier}>{tier}</h3>
      <p className={styles.price}>${price}</p>
      <ul className={styles.features}>
        <li>{seats}</li>
        {features.map((feat, index) => (
          <li key={index}>{feat}</li>
        ))}
      </ul>
      <button className={styles.button}>Get Tickets</button>
    </div>
  );
}
