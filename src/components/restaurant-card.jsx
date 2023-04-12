import PropTypes from "prop-types";
import StarIcon from "./star-icon";

export default function RestaurantCard({ restaurant }) {
  return (
    <section className="grid grid-cols-2 divide-x">
      <header>
        <h2 className="text-2xl">{restaurant.restaurantName}</h2>
        {[].fill(restaurant.stars).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </header>
      <ul>
        {restaurant.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </section>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.exact({
    id: PropTypes.number.isRequired,
    restaurantName: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }),
};
