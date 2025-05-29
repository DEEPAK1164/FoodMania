import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
// Hardcoded mock restaurant data
import { mockRestaurants } from "../utils/mockData";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    // Simulate fetching data (with a timeout if needed)
    setRestaurantList(mockRestaurants);
  }, []);
  return (
    <div className="res-container">
      {restaurantList.length === 0 ? (
        <h3>Loading...</h3>
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
  );
};
export default Body;
