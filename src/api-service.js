const BASE_URL = "http://localhost:3001/restaurants";
import ky from "ky";

export default {
  index() {
    return ky.get(BASE_URL).json();
  },
};
