import classes from "./Weather.module.css";
import Card from "./UI/Card";
import SearchBar from "./searchBar/SearchBar";

const Weather = () => {
  return (
    <Card className={classes.weather}>
      <SearchBar />
    </Card>
  );
};

export default Weather;
