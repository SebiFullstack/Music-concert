import React from 'react';
import './GalleryItem.module.css';

const GalleryItem = ({ image, title, description }) => {
  return (
    <div className="galleryItem">
      <img src={image} alt={title} className="galleryImage" />
      <h3 className="galleryTitle">{title}</h3>
      <p className="galleryDescription">{description}</p>
    </div>
  );
};

export default GalleryItem;
