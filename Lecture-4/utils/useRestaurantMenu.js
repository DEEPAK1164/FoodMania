import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!resId) return;

        const data = await fetch(
          `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.912147662936903&lng=80.94426456838846&restaurantId=${resId}`
        );
        const json = await data.json();

        setResInfo(json?.data); // ✅ you only want `.data` in most cases
      } catch (error) {
        console.error("Failed to fetch restaurant menu:", error);
        setResInfo(null);
      }
    };

    fetchData();
  }, [resId]); // ✅ triggers re-fetch when resId is available

  return resInfo;
};

export default useRestaurantMenu;
