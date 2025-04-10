import React from 'react';
import styles from './AboutSection.module.css';
import aboutFront from '../../../public/img/about-img-front.webp';
import aboutBack from '../../../public/img/about-img-back.webp';

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <img src={aboutBack} alt="Background" className={styles.bgImage} />
        <img src={aboutFront} alt="Concert" className={styles.mainImage} />
      </div>
      <div className={styles.content}>
        <h2><span>About </span><span>Music</span></h2>
        <p>
            Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
            Vivamus a elit sodales, tincidunt nunc non, maximus lacus.
            Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus.
            Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus
        </p>
        <button className={styles.button}>
          Learn More <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
  );
}

export default AboutSection;
