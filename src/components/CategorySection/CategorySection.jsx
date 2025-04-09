import React from "react";
import CategoryCard from "./CategoryCard";
import styles from "./CategorySection.module.css";

const categories = [
  {
    title: "Pop",
    description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    icon: <img src="/Icons/Dj-Mixer.svg" alt="DJ Mixer" className={`${styles.icon} ${styles.popIcon}`} />,
    className: "bg-dj-mixer",
  },
  {
    title: "Folk",
    description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    icon: <img src="/Icons/Bagpipes.svg" alt="Bagpipes" className={`${styles.icon} ${styles.folkIcon}`} />,
    className: "bg-bagpipes",
  },
  {
    title: "Instrumental",
    description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    icon: <img src="/Icons/Saxophone.svg" alt="Saxophone" className={`${styles.icon} ${styles.whiteIcon}`} />,
    className: "bg-saxophone",
  },
  {
    title: "Rock",
    description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    icon: <img src="/Icons/Guitar.svg" alt="Rock" className={styles.icon} />,
    className: "bg-rock",
  },
  {
    title: "Jazz",
    description: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    icon: <img src="/Icons/Trumpet.svg" alt="Jazz" className={styles.icon} />,
    className: "bg-jazz",
  },
];

const CategorySection = () => {
  return (
    <section className={styles["category-section"]}>
      <h2 className={styles["category-title"]}>
        <span className={styles["highlight"]}>Explore</span>
        <span className={styles["text-title"]}> By Category</span> 
      </h2>
      <div className={styles["category-grid"]}>
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
