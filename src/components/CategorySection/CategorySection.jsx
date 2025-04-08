import React from 'react';
import CategoryCard from './CategoryCard'; 

const CategorySection = () => {
  return (
    <div>
      <CategoryCard
        title="Category 1"
        description="This is the description for category 1."
        image="path/to/image.jpg"
      />
    </div>
  );
};

export default CategorySection;
