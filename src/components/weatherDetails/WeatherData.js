import classes from './WeatherData.module.css';
import {FaWind, FaWater, FaCloud} from 'react-icons/fa';
const WeatherData = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.action}>
          <FaWind className={classes.actionIcon} />
          <p>Wind</p>
          <span>15 km/h</span>
        </div>
        <div className={classes.action}>
          <FaWater className={classes.actionIcon} />
          <p>Humidity</p>
          <span>24 %</span>
        </div>
        <div className={classes.action}>
          <FaCloud className={classes.actionIcon} />
          <p>Condition</p>
          <span>Haze</span>
        </div>
      </div>
    );
}

export default WeatherData;