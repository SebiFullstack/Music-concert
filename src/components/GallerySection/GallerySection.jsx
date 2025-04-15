import React, { useState, useRef } from 'react';
import styles from './GallerySection.module.css';
import GalleryItem from './GalleryItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const photos = Array.from({ length: 10 }, (_, i) => ({
  image: `/img/inst-shorts${i + 1}.webp`,
  title: 'Lorem Ipsum Amet',
  hashtags:
    '#music #concert #conference #london #event #artist #dj #soundtrack #dance',
}));

const VISIBLE_COUNT = 5;

const GallerySection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const total = photos.length;
  const galleryRef = useRef(null);
  const cardWidth = 250 + 24;

  const scroll = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.style.transition = 'transform 0.5s ease';
      galleryRef.current.style.transform = `translateX(${
        direction === 'left' ? cardWidth : -cardWidth
      }px)`; 

      setTimeout(() => {
        setStartIndex((prev) =>
          direction === 'left'
            ? (prev - 1 + total) % total
            : (prev + 1) % total
        );
        galleryRef.current.style.transition = 'none';
        galleryRef.current.style.transform = 'translateX(0)';
      }, 500); 
    }
  };

  const visiblePhotos = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    const index = (startIndex + i) % total;
    visiblePhotos.push(photos[index]);
  }

  return (
    <section className={styles.section}>
      <img src="/Icons/Vector.svg" alt="decorative background" className={styles.bgIcon} />
      <h2 id="Blog" className={styles.heading}>See our Best Shots</h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrowLeft} onClick={() => scroll('left')}>
          <FaChevronLeft />
        </button>

        <div className={styles.galleryWrapper}>
          <div className={styles.gallery} ref={galleryRef}>
            {visiblePhotos.map((item, index) => (
              <div className={styles.galleryItem} key={index}>
                <GalleryItem
                  image={item.image}
                  title={item.title}
                  hashtags={item.hashtags}
                  faded={false}
                />
                <div className={styles.galleryItemText}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrowRight} onClick={() => scroll('right')}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
