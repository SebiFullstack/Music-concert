import React from 'react';
import GalleryItem from './GalleryItem';
import styles from './GallerySection.module.css';

function GallerySection() {
  return (
    <section className={styles.gallerySection}>
      <h2>Gallery</h2>
      <GalleryItem />
    </section>
  );
}

export default GallerySection;
