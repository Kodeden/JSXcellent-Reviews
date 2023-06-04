import ky from "ky";

const BASE_URL = "http://localhost:3001/restaurants";

export default {
  index() {
    return ky.get(BASE_URL).json();
  },
};
