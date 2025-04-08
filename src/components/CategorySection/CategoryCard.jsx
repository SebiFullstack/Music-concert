import React from 'react';
import './CategoryCard.module.css';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="cardImage" />
      <h3 className="cardTitle">{title}</h3>
    </div>
  );
};

export default CategoryCard;  
