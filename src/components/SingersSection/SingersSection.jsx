import React from 'react';
import styles from './SingersSection.module.css';

function SingersSection() {
  return (
    <section className={styles.singersSection}>
      <div className={styles.left}>
        <h2>Singers</h2>
        <p>
          Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
          Vivamus a elit sodales, tincidunt nunc non, maximus lacus.
          Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut
          lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum
          cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus
        </p>
        <button className={styles.button}>
          View All Singers <span>→</span>
        </button>
      </div>
      <div className={styles.right}>
       <div className={styles.imageGrid}>
       <img src="/img/singers1.webp" alt="Singer 1" className={styles.img1} />
       <img src="/img/singers2.webp" alt="Singer 2" className={styles.img2} />
       <img src="/img/singers3.webp" alt="Singer 3" className={styles.img3} />
       <img src="/img/singers4.webp" alt="Singer 4" className={styles.img4} />
</div>

      </div>
    </section>
  );
}

export default SingersSection;
