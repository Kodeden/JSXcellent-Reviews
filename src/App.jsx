import RestaurantCard from "./components/restaurant-card";
import useRestaurants from "./hooks/use-restaurants";

function App() {
  const restaurants = useRestaurants();

  return (
    <>
      <h1 className="my-4 text-center text-3xl">
        Bill and Ted&apos;s Excellent Reviews
      </h1>

      <main className="space-y-4 text-center">
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </main>
    </>
  );
}

export default App;
