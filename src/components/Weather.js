

import classes from "./Weather.module.css";
import Card from "./UI/Card";
import SearchBar from "./searchBar/SearchBar";
import CityTime from "./weatherDetails/CityTime";
import WeatherIcon from "./weatherDetails/WeatherIcon";
import WeatherData from "./weatherDetails/WeatherData";
import ErrorCom from "./UI/ErrorCom";
import { useEffect, useState } from "react";

const Weather = () => {
  /* weatherData will take all the needed data in an object */
  const [weatherData, setWeatherData] = useState({});
  /* cityName is needed for frtching data  */
  const [cityName, setCityName] = useState("");
  /* error state */
  const [error, setError] = useState(null);
  /* loading state */
  const [isLoading, setIsLoading] = useState(false);
  /* API Key  */
  const apiKey = process.env.REACT_APP_API_KEY;

  // using useEffect for first time rendering
  useEffect(() => {
    fetchHandler("Kolkata");
  }, []);

  /* fetch handler: fetching the data and store it in weatherData state (obj) */
  const fetchHandler = async (city) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const date = new Date(data.dt * 1000);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const temperatureInCelsius = Math.round(data.main.temp - 273);
      const windSpeedInKMPH = Math.round(data.wind.speed * 3.6);

      const weatherDetails = {
        cityname: data.name,
        date: formattedDate,
        condition: data.weather[0].main,
        temperature: temperatureInCelsius,
        windspeed: windSpeedInKMPH,
        humidity: data.main.humidity,
      };
      setWeatherData(weatherDetails);
    } catch (error) {
      setError(error.message);
      setWeatherData({});
    }
    setIsLoading(false);
  };

  // setting city name
  const cityNameHandler = (city) => {
    setCityName(city);
  };

  // loading state
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Card className={classes.weather}>
      <SearchBar
        onFetch={() => fetchHandler(cityName)}
        onGetCity={cityNameHandler}
      />
      {error && <ErrorCom message={error} />}
      {!error && <CityTime getWeatherData={weatherData} />}
      {!error && <WeatherIcon getWeatherData={weatherData} />}
      {!error && <WeatherData getWeatherData={weatherData} />}
    </Card>
  );
};

export default Weather;
