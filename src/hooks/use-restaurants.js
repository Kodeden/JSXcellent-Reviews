import { useEffect, useState } from "react";
import apiService from "../api-service";

export default function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiService.index().then((json) => {
      setData(json.restaurants);
    });
  }, []);

  return data;
}
