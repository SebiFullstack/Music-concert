import React from 'react';
import styles from './GalleryItem.module.css';
import { FaHeart, FaRegComment } from 'react-icons/fa';
import clsx from 'clsx';

const GalleryItem = ({ image, title, hashtags, faded }) => {
  return (
    <div className={clsx(styles.card, faded && styles.faded)}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.stats}>
        <div><FaHeart /> 412</div>
        <div><FaRegComment /> 140</div>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.hashtags}>{hashtags}</p>
    </div>
  );
};

export default GalleryItem;
