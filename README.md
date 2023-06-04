# Bill and Ted's Excellent Reviews Application

Bill and Ted, from the 1989 hit movie, _Bill and Ted's Excellent Adventure,_ have started a new blog where they review their favorite restaurants. It has become tremendously popular and has landed them tons of commercials for various food chains. They figured that they could play off of their movie stardom to make a quick buck 🤑, which is why they called the blog _Bill and Ted's Excellent Reviews._

Due to their rapid growth, they thought it may be best to create their own application for their reviews. Unfortunately, they have little to no programming knowledge and thought that they could hack it with just Google and a couple of JavaScript textbooks they found. As you can imagine, this has not gone very excellent. They have managed to build some of the website, but they need help getting it across the finish line so they can continue their most excellent blogging.

This is where you come in!

## Getting Started

Clone, do `npm i`, etc.

Create a `db.json` file in the root of the project. Paste in the following:

```json
{
  "restaurants": {
    "restaurants": [
      {
        "id": 1,
        "restaurantName": "Millie's Macaroons",
        "stars": 5,
        "comments": [
          {
            "id": 1,
            "text": "The macaroons are EXCELLENT! - Bill"
          },
          {
            "id": 2,
            "text": "Best macaroonies in town. - Ted"
          },
          {
            "id": 3,
            "text": "These macaroons take my tastebuds on a roller coaster of delight! - Bill"
          }
        ]
      },
      {
        "id": 2,
        "restaurantName": "Ben's Burgers",
        "stars": 4,
        "comments": [
          {
            "id": 4,
            "text": "If we could only pick one word to describe the burgers, it would be....EXCELLENT. - Bill"
          },
          {
            "id": 5,
            "text": "My lettuce was a little soggy, but overall, the beef is DELICIOUS. - Ted"
          }
        ]
      },
      {
        "id": 3,
        "restaurantName": "Frank's Fritters",
        "stars": 1,
        "comments": [
          {
            "id": 6,
            "text": "I don't know how they get away with calling this stuff food.....NOT excellent.. - Bill"
          },
          {
            "id": 7,
            "text": "Took one bite of my fritter and got out of there....disgusting! - Ted"
          }
        ]
      },
      {
        "id": 4,
        "restaurantName": "McDonald's",
        "stars": 5,
        "comments": [
          {
            "id": 8,
            "text": "An absolute classic. Not a fan of the clown though. - Bill"
          },
          {
            "id": 9,
            "text": "Am I the only one who loves the fillet-o-fish? - Ted"
          }
        ]
      }
    ]
  }
}
```

You'll need 1️⃣ terminal instance to run: `npm run json-server`. This will start up the JSON server on port 3001. See line 8 in the `package.json`.

See `api-service.js` for how to make requests to the JSON server.

You'll want a `RestaurantCard` **component** at least. The following code will help:

```jsx
{
  Array.from({ length: restaurant.stars }, (_, index) => (
    <span key={index}>⭐</span>
  ));
}
```

## Acceptance Criteria

- [ ] As a user, I want to be able to view all of the reviews on the homepage so that I can see what others are saying about the restaurants.
