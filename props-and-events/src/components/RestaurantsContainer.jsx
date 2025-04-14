import { restaurants } from "../data/data.js"
import Restaurant from "./Restaurant"

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {/* We map over the array of restaurants and create a <Restaurant> for each */}
      {restaurants.map((restaurant) => (
        <Restaurant
          restaurant={restaurant}
          key={restaurant.id}
        />
      ))}
    </div>
  )
}

export default RestaurantsContainer
