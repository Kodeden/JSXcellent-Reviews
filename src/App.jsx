import { useEffect, useState } from "react";
import apiService from "./api-service";
import RestaurantCard from "./components/restaurant-card";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    apiService.index().then((json) => {
      setRestaurants(json.restaurants);
    });
  }, []);

  return (
    <>
      <h1>Bill and Ted&apos;s Excellent Reviews</h1>

      <main>
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </main>
    </>
  );
}

export default App;
