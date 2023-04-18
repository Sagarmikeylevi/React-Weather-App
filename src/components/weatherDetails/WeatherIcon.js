import Card from "../UI/Card";
import classes from "./WeatherIcon.module.css";
import Clouds from "../assets/clouds.png";
import Clear from "../assets/clear.png";
import Drizzle from "../assets/drizzle.png";
import Mist from "../assets/mist.png";
// import Rain from "../assets/rain.png";
import Snow from "../assets/snow.png";
import { FaDotCircle } from "react-icons/fa";

const WeatherIcon = (props) => {
  let weatherCondition = Clear;
  const weather = props.getWeatherData.condition;
  if (weather === "Clouds") weatherCondition = Clouds;

  if (
    weather === "Mist" ||
    weather === "Fog" ||
    weather === "Smoke" ||
    weather === "Dust" ||
    weather === "Sand" ||
    weather === "Ash" ||
    weather === "Squall"
  )
    weatherCondition = Mist;

  if (
    weather === "Rain" ||
    weather === "Drizzle" ||
    weather === "Thunderstorm" ||
    weather === "Tornado"
  )
    weatherCondition = Drizzle;

  if (weather === "Snow") weatherCondition = Snow;
    return (
      <Card className={classes.wrapper}>
        <img src={weatherCondition} alt="Weather icon representing cloudy weather" />
        <p>{props.getWeatherData.temperature}</p>
        <FaDotCircle className={classes.degreeIcon} />
      </Card>
    );
};

export default WeatherIcon;
