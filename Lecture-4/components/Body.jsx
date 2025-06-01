import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

import { SWIGGY_RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
 const [copyList, setCopyList] = useState([]);


  const [loading, setLoading] = useState(true);
  const[searchText,setSearchText]=useState("");
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(SWIGGY_RESTAURANTS_URL);
      const json = await response.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantList(restaurants);
      setCopyList(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);

const onlineStatus=useOnlineStatus();
if(onlineStatus===false) return <h1>looks like you are offline, please! connect to the internet</h1>

  return (
    <div className="body">
    <div className="filter-and-search">
   
    <div className="filter-restaurent">
     <button
  className="filter-btn"
  onClick={() => {
    const filteredList = restaurantList.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setCopyList(filteredList);
  }}
>
  Top Rated Restaurants
</button>
    </div>
     <div className="search">
  <input type="text" className="search-box" value={searchText} onChange={(e)=>{
    setSearchText(e.target.value)
  }}/>
  <button onClick={()=>{
    const filteredRestaurent=restaurantList.filter((res)=>{
      return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    })
    setCopyList(filteredRestaurent);
  }}>Search</button>
    </div>
    </div>
    <div className="res-container">
      {loading ? (
        <Shimmer/>
      ) :  !copyList || copyList.length === 0 ?(
        <h3>No restaurants found</h3>
      ) : (
        copyList.map((res) => (
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
