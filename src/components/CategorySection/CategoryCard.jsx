import React from "react";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ title, description, icon, className }) => {
  return (
    <div  className={`${styles.card} ${styles[className]}`}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CategoryCard;
