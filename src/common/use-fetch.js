import { useEffect, useState } from "react";

export function useFetch(url) {
  const [isGoodWeather, setIsGoodWeather] = useState({});

  try {
    useEffect(() => {
      getAPI();
      let intervalId = setInterval(getAPI, 5000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    async function getAPI() {
      const response = await fetch(url);
      const data = await response.json();
      setIsGoodWeather(data);
    }
  } catch (error) {
    console.log(error);
  }
  return isGoodWeather;
}
