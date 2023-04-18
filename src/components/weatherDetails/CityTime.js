import classes from "./CityTime.module.css";

const CityTime = (props) => {
  return (
    <div className={classes.cityTimeWrapper}>
      <p>{props.getWeatherData.cityname}</p>
      <span>{props.getWeatherData.date}</span>
    </div>
  );
};

export default CityTime;
