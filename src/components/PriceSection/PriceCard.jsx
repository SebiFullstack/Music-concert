import React from 'react';
import './PriceCard.module.css';

const PriceCard = ({ title, price, description }) => {
  return (
    <div className="priceCard">
      <h3 className="priceTitle">{title}</h3>
      <p className="priceAmount">{price}</p>
      <p className="priceDescription">{description}</p>
      <button className="priceButton">Add to Cart</button>
    </div>
  );
};

export default PriceCard;
