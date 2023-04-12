import PropTypes from "prop-types";

export default function RestaurantCard({ restaurant }) {
  return (
    <section className="divide-y [&>*]:p-4">
      <header className="space-y-8">
        <h2 className="text-2xl">{restaurant.restaurantName}</h2>
        <div>
          {Array.from({ length: restaurant.stars }, (_, index) => (
            <span key={index}>⭐</span>
          ))}
        </div>
      </header>
      <ul className="space-y-2 py-8">
        {restaurant.comments.map((comment) => (
          <li key={comment.id}>💬&nbsp;{comment.text}</li>
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
