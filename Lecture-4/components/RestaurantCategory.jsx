import React, { useState } from 'react';
import ItemList from './ItemList';


const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  const handleClick = () => {
   setShowIndex();
  };

  return (
    <div className="category-container">
      <div className="category-header" onClick={handleClick}>
        <span className="category-title">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span className={`category-arrow ${showItems ? 'rotate' : ''}`}>⬇️</span>
      </div>

      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
