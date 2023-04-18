import classes from "./Weather.module.css";
import Card from "./UI/Card";
import SearchBar from "./searchBar/SearchBar";
import CityTime from "./weatherDetails/CityTime";
import WeatherIcon from "./weatherDetails/WeatherIcon";
import WeatherData from "./weatherDetails/WeatherData";
import ErrorCom from "./UI/ErrorCom";
import { useEffect, useState} from "react";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState(null);
  const fetchHandler =  async (city) => {
     setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba3066e6ee3e65a215abb69a2fff2026`
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
    
  };

  const cityNameHandler = (city) => {
    setCityName(city);
  }

  useEffect(() => {
    fetchHandler('Kolkata');
  } , [])

  return (
    <Card className={classes.weather}>
      <SearchBar
        onFetch={() => fetchHandler(cityName)}
        onGetCity={cityNameHandler}
      />
      {error && <ErrorCom message={error}  />}
      {!error && <CityTime getWeatherData={weatherData} />}
      {!error && <WeatherIcon getWeatherData={weatherData} />}
      {!error && <WeatherData getWeatherData={weatherData} />}
    </Card>
  );
};

export default Weather;
