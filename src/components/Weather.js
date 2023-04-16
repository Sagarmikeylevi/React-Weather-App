import classes from "./Weather.module.css";
import Card from "./UI/Card";
import SearchBar from "./searchBar/SearchBar";
import CityTime from "./weatherDetails/CityTime";
import WeatherIcon from "./weatherDetails/WeatherIcon";

const Weather = () => {
  return (
    <Card className={classes.weather}>
      <SearchBar />
      <CityTime />
      <WeatherIcon />
    </Card>
  );
};

export default Weather;
