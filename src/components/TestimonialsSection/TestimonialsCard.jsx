import React from 'react';
import styles from './TestimonialsCard.module.css';

const TestimonialsCard = ({ name, website, image, text }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.textBlock}>
        <img
          src="Icons/testimonials-top.svg"
          alt="Quote top"
          className={styles.quoteIconTop}
        />
        <p className={styles.text}>{text.replace('\n', ' ')}</p>
        <img
          src="Icons/testimonials-bottom.svg"
          alt="Quote bottom"
          className={styles.quoteIconBottom}
        />
      </div>
      <div className={styles.author}>
        <img src={image} alt={name} className={styles.authorImage} />
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{name}</p>
          <p className={styles.authorWebsite}>{website}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;