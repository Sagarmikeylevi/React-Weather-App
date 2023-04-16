import Card from "../UI/Card";
import classes from "./WeatherIcon.module.css";
import weatherImg from "../assets/clouds.png";
import { FaDotCircle } from "react-icons/fa";

const WeatherIcon = () => {
  return (
    <Card className={classes.wrapper}>
      <img src={weatherImg} alt="Weather icon representing cloudy weather" />
      <p>19</p>
      <FaDotCircle className={classes.degreeIcon} />
    </Card>
  );
};

export default WeatherIcon;
