import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

import { SWIGGY_RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(SWIGGY_RESTAURANTS_URL);
      const json = await response.json();
      const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants 
      setRestaurantList(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <div className="body">
    <div className="filter-restaurent">
     <button
  className="filter-btn"
  onClick={() => {
    const filteredList = restaurantList.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setRestaurantList(filteredList);
  }}
>
  Top Rated Restaurants
</button>
    </div>
    <div className="res-container">
      {loading ? (
        <Shimmer/>
      ) : restaurantList.length === 0 ? (
        <h3>No restaurants found</h3>
      ) : (
        restaurantList.map((res) => (
          <RestaurentCard
            key={res.info.id}
            resName={res.info.name}
            cuisines={res.info.cuisines.join(", ")}
            starRating={res.info.avgRating}
            delTime={res.info.sla.deliveryTime}
            imageId={res.info.cloudinaryImageId}
          />
        ))
      )}
    </div>
    </div>
  );
};
export default Body;
