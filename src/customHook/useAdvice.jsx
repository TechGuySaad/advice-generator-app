import axios from "axios";
import { useState, useEffect } from "react";

export default function useAdvice(api) {
  const [state, setState] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      setState(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [api]); // Only include `api` in the dependency array

  return [state, fetchData];
}
