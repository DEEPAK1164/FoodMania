import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurentMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const params=useParams();
  console.log(params);
  const {resId}=params;
  console.log(resId);


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


  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
  } = resInfo.cards[2]?.card?.card.info;

  const dealOfTheDayItems =
    resInfo?.cards
      ?.find((c) =>
        c?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some((card) =>
          card?.card?.card?.title?.toLowerCase().includes('deal of the day')
        )
      )
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((card) =>
        card?.card?.card?.title?.toLowerCase().includes('deal of the day')
      )
      ?.card?.card?.itemCards?.map((item) => item.card.info) || [];

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

      <div className="deal-section">
        <h2>🍽️ Deal of the Day</h2>
        {dealOfTheDayItems.length > 0 ? (
          <ul className="menu-items">
            {dealOfTheDayItems.map((item) => (
              <li key={item.id} className="menu-item-card">
                <img
                  src={
                    item.imageId
                      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`
                      : 'https://via.placeholder.com/208?text=No+Image'
                  }
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="menu-item-name">{item.name}</div>
                <div className="menu-item-price">
                  ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-deals">No "Deal of the Day" items available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurentMenu;
