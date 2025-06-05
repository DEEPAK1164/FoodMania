import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurentMenu = () => {

  const params=useParams();
  // console.log(params);
  const {resId}=params;
  // console.log(resId);
  const[showIndex,setShowIndex]=useState(0);



  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.912147662936903&lng=80.94426456838846&restaurantId=${resId}`
  //   );
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  



const resInfo=useRestaurantMenu(resId);
// console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
  } = resInfo.cards[2]?.card?.card.info;

//  console.log(resInfo.cards[5]?.groupedCard.cardGroupMap.REGULAR.cards);
 const arr=resInfo.cards[5]?.groupedCard.cardGroupMap.REGULAR.cards;
// console.log(arr);
const categories=arr.filter((ele,ind,resInfo)=>ele?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(categories);

 

  return (
    <div className="menu-container">

      <div className="restaurant-header">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${cloudinaryImageId}`}
          alt={name}
          className="restaurant-image"
        />
        <div>
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-details">
            {cuisines?.join(', ')} • {costForTwoMessage}
          </p>
        </div>
      </div>
     
           {/* Categories Accordion */}
           {categories.map((category,index)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index)}/>)}


    </div>
  );
};

export default RestaurentMenu;
