// this is for showing the weather condition 

import classes from './WeatherData.module.css';
import {FaWind, FaWater, FaCloud} from 'react-icons/fa';
const WeatherData = (props) => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.action}>
          <FaWind className={classes.actionIcon} />
          <p>Wind</p>
          <span>{props.getWeatherData.windspeed}km/h</span>
        </div>
        <div className={classes.action}>
          <FaWater className={classes.actionIcon} />
          <p>Humidity</p>
          <span>{props.getWeatherData.humidity}%</span>
        </div>
        <div className={classes.action}>
          <FaCloud className={classes.actionIcon} />
          <p>Condition</p>
          <span>{props.getWeatherData.condition}</span>
        </div>
      </div>
    );
}

export default WeatherData;