import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data}) => {
    // console.log(data);
const[showItems,setShowItems]=useState(true);
const handleClick=()=>{
  setShowItems(!showItems);
}

  return (
    <div>
    <div>
     {/* Header */}
  <div onClick={handleClick}>
   <span>{data.title} ({data?.itemCards?.length})</span>
   <span>⬇️</span>
   
      {/* Accordion Body  */}
    {showItems && <ItemList items={data?.itemCards}/>}
  </div>
</div>
   
    </div>
  )
}

export default RestaurantCategory
